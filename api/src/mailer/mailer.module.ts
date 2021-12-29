import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { AuthTemplate, ContactTemplate } from './templates';

@Module({
  providers: [MailerService, AuthTemplate, ContactTemplate],
  controllers: [MailerController],
  exports: [MailerService],
})
export class MailerModule {}
