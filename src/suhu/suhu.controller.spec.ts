import { Test, TestingModule } from '@nestjs/testing';
import { SuhuController } from './suhu.controller';
import { SuhuService } from './suhu.service';

describe('SuhuController', () => {
  let controller: SuhuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuhuController],
      providers: [SuhuService],
    }).compile();

    controller = module.get<SuhuController>(SuhuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
