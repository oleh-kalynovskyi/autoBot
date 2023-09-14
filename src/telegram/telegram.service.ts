import { Injectable } from '@nestjs/common';
import { parseVehicleInfo } from './helpers/createObjectForSearch';
import { AutoRiaService } from 'src/auto-ria/auto-ria.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class telegramService {
  constructor(private AutoRiaService: AutoRiaService) {}

  botMessage() {
    const telegramToken = process.env.TELEGRAM_BOT_API;
    const startMessage =
      'Вітаю, ТГ бот ще в розробці.\n' +
      'Бот шукає максимум 100 перший оголошень на AutoRia.\n' +
      'Пошук здійснюєтся відносно року авто (+- 2 роки), моделі та марки авто.\n' +
      'На даниний момент пошук здійснюється за такими марками -- audi, volkswagen, bmw, lexus, mercedes-benz, jaguar, porsche, landRover, nissan, polestar, tesla, toyota, volvo, ford\n' +
      'Приклад коректного запитe -- 2016 audi a4';

    const bot = new TelegramBot(telegramToken, { polling: true });
    bot.on('message', (msg) => {
      if (msg.text !== '/start') {
        const vehicleInfo = parseVehicleInfo(msg.text);
        this.AutoRiaService.getPathOfAdvertisement(vehicleInfo)
          .then((res) =>
            bot.sendMessage(msg.chat.id, res, { parse_mode: 'HTML' }),
          )
          .catch((err) =>
            bot.sendMessage(msg.chat.id, 'Шось не робе, перевір запит'),
          );
      }
      if (msg.text === '/start') {
        bot.sendMessage(msg.chat.id, startMessage);
      }
    });
  }
}
