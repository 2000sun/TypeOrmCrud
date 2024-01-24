import { Test, TestingModule } from '@nestjs/testing';
import { ApplesunController } from './applesun.controller';
import { ApplesunService } from './applesun.service';

describe('ApplesunController', () => {
  let controller: ApplesunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplesunController],
      providers: [ApplesunService],
    }).compile();

    controller = module.get<ApplesunController>(ApplesunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
