import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { telegramService } from './telegram.service';

@Controller()
export class TelegramController {
  constructor(private readonly telegramService: telegramService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getBotDialog(@Res() res) {
    this.telegramService.botMessage();
    res.status(HttpStatus.OK).send('Bot service started');
  }
}
