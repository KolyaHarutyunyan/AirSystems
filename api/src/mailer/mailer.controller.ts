import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactDTO, EstimateDTO } from './dto';
import { MailStatus } from './mailer.contants';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Get()
  async sendTestMail() {
    const res = await this.mailerService.sendTestMail();
    return res;
  }

  /** Submit a contact form */
  @Post('contactForm')
  async submitContactForm(@Body() dto: ContactDTO): Promise<MailStatus> {
    const result = await this.mailerService.sendContactMail(dto);
    return result;
  }

  /** Submit a contact form */
  @Post('newsletter/:email')
  async subscribeNewsletter(
    @Param('email') email: string,
  ): Promise<MailStatus> {
    const result = await this.mailerService.sendSubscibeMail(email);
    return result;
  }

  /** Submit a contact form */
  @Post('estimate')
  async submitEstimate(@Body() dto: EstimateDTO): Promise<MailStatus> {
    const result = await this.mailerService.sendEstimateMail(dto);
    return result;
  }
}
