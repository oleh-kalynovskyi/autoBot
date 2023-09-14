import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { TelegramModule } from './telegram/telegram.module';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(TelegramModule);
  await app.listen(3000);
}
bootstrap();
