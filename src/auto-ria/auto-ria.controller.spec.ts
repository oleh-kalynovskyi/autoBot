import { Test, TestingModule } from '@nestjs/testing';
import { AvtoRiaController } from './auto-ria.controller';

describe('AvtoRiaController', () => {
  let controller: AvtoRiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvtoRiaController],
    }).compile();

    controller = module.get<AvtoRiaController>(AvtoRiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
