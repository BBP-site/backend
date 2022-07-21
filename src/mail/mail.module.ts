import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: `${process.env.HOST_EMAIL}`,
        secure: false,
        auth: {
          user: `${process.env.USER_EMAIL}`,
          pass: `${process.env.PASS_EMAIL}`,
        },
      },
      defaults: {
        from: `${process.env.USER_EMAIL}`,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})

export class MailModule {}
