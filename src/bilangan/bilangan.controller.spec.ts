import { Test, TestingModule } from '@nestjs/testing';
import { BilanganController } from './bilangan.controller';
import { BilanganService } from './bilangan.service';

describe('BilanganController', () => {
  let controller: BilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BilanganController],
      providers: [BilanganService],
    }).compile();

    controller = module.get<BilanganController>(BilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
