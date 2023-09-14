import { Module } from '@nestjs/common';
import { AutoRiaService } from './auto-ria.service';

@Module({
  exports: [AutoRiaService],
  providers: [AutoRiaService],
})
export class AvtoRiaModule {}
