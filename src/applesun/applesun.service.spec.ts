import { Test, TestingModule } from '@nestjs/testing';
import { ApplesunService } from './applesun.service';

describe('ApplesunService', () => {
  let service: ApplesunService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplesunService],
    }).compile();

    service = module.get<ApplesunService>(ApplesunService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
