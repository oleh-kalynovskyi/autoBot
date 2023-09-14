import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { telegramService } from './telegram.service';
import { AvtoRiaModule } from 'src/auto-ria/auto-ria.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AvtoRiaModule, ConfigModule.forRoot()],
  controllers: [TelegramController],
  providers: [telegramService],
})
export class TelegramModule {}
