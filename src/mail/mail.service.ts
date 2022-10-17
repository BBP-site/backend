import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from '../feedback/dto/create-feedback.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendFeedbackMail(feedback: CreateFeedbackDto): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: `${process.env.USER_TO_EMAIL}`,
        subject: 'Обратная связь от пользователя с сайта bbp.ru',
        template: './feedbackMail',
        context: {
          name: feedback.name,
          phone: feedback.phone,
          question: feedback.question,
          email: feedback.email,
        },
      });
    } catch (error) {
      throw new HttpException(
        `Ошибка работы почты: ${JSON.stringify(error)}`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
