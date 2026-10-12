import { Test, TestingModule } from '@nestjs/testing';
import { DeretController } from './deret.controller';
import { DeretService } from './deret.service';

describe('DeretController', () => {
  let controller: DeretController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeretController],
      providers: [DeretService],
    }).compile();

    controller = module.get<DeretController>(DeretController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
