import { Injectable } from '@nestjs/common';
import { SendEmailCommandInput } from '@aws-sdk/client-ses';
import { COMPANY_EMAIL } from '../../constants';
import { EstimateDTO } from '../dto';

@Injectable()
export class ContactTemplate {
  /** creates the contact command input */
  getContact = (
    name: string,
    email: string,
    description: string,
  ): SendEmailCommandInput => {
    const input: SendEmailCommandInput = {
      Destination: { ToAddresses: [COMPANY_EMAIL] },
      Source: 'eachbase@gmail.com',
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Contact Form Submitted from Armat.org',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>Contact Form submitted for Armat.com</h1>
                <h3> name:  ${name} </h3>
                <h3> name:  ${email} </h3>
                <h3> name:  ${description} </h3>
            </html> `,
          },
        },
      },
      ReplyToAddresses: [email],
    };
    return input;
  };

  /** Notify that someone is subscribing to the newsletter */
  subscribeNewsletter = (email: string): SendEmailCommandInput => {
    const input: SendEmailCommandInput = {
      Destination: { ToAddresses: [COMPANY_EMAIL] },
      Source: 'eachbase@gmail.com',
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Website Newsletter Subscription',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>The following email want to subscribe to the newsletter</h1>
                <h3> ${email} </h3>
            </html> `,
          },
        },
      },
      ReplyToAddresses: [email],
    };
    return input;
  };

  /** submit an estimate request form */
  submitEstimate = (dto: EstimateDTO): SendEmailCommandInput => {
    const input: SendEmailCommandInput = {
      Destination: { ToAddresses: [COMPANY_EMAIL] },
      Source: 'eachbase@gmail.com',
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Quote Estimate Request',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>Quote estimate has beed requested from your website</h1>
                <h3> Name: ${dto.firstName + ' ' + dto.lastName} </h3>
                <h3> Email: ${dto.email} </h3>
                <h3> Phone: ${dto.phoneNumber} </h3>
                <h3> Address: ${dto.address} </h3>
                <h3> Type of Service: ${dto.serviceType} </h3>
                <h3> Type of Building: ${dto.buildingType} </h3>
                <h3> Preferred Appointment Time:  ${dto.apptTime} </h3>
                <h3> Preferred Contact method:  ${dto.contactMethod} </h3>
            </html> `,
          },
        },
      },
      ReplyToAddresses: [dto.email],
    };
    return input;
  };
}
