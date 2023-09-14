import { Test, TestingModule } from '@nestjs/testing';
import { AutoRiaService } from './auto-ria.service';

describe('AutoRiaService', () => {
  let service: AutoRiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoRiaService],
    }).compile();

    service = module.get<AutoRiaService>(AutoRiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
