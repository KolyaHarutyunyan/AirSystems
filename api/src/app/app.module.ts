import { Module } from '@nestjs/common';
import { MailerModule } from 'src/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
