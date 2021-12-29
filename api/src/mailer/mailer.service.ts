import {
  SESClient,
  SendEmailCommand,
  SendEmailRequest,
} from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';
import { DOMAIN_NAME } from '../constants';
import { ContactDTO, EstimateDTO } from './dto';
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  MailStatus,
  SES_REGION,
} from './mailer.contants';
import { AuthTemplate, ContactTemplate } from './templates';

@Injectable()
export class MailerService {
  constructor(
    private readonly contactTemplate: ContactTemplate,
    private readonly authTemplate: AuthTemplate,
  ) {
    this.mailer = new SESClient({
      region: SES_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
    // this.authTemplate = new AuthTemplate();
  }
  private mailer: SESClient;
  // private authTemplate: AuthTemplate;

  sendContactMail = async (contactDTO: ContactDTO): Promise<MailStatus> => {
    const mailOptions = this.contactTemplate.getContact(
      contactDTO.name,
      contactDTO.email,
      contactDTO.message,
    );
    return await this.sendMail(mailOptions);
  };

  sendSubscibeMail = async (email: string): Promise<MailStatus> => {
    const mailOptions = this.contactTemplate.subscribeNewsletter(email);
    return await this.sendMail(mailOptions);
  };

  sendEstimateMail = async (dto: EstimateDTO): Promise<MailStatus> => {
    const mailOptions = this.contactTemplate.submitEstimate(dto);
    return await this.sendMail(mailOptions);
  };

  // //TestMail
  sendTestMail = async () => {
    const mailOptions = this.authTemplate.generateTestEmail();
    return await this.sendMail(mailOptions);
  };

  //Private menthods
  private sendMail = async (options: SendEmailRequest): Promise<MailStatus> => {
    try {
      await this.mailer.send(new SendEmailCommand(options));
      return MailStatus.DELIVERED;
    } catch (err) {
      return MailStatus.NOT_DELIVERED;
    }
  };
}
