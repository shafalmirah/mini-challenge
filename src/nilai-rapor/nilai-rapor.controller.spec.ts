import { Test, TestingModule } from '@nestjs/testing';
import { NilaiRaporController } from './nilai-rapor.controller';
import { NilaiRaporService } from './nilai-rapor.service';

describe('NilaiRaporController', () => {
  let controller: NilaiRaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NilaiRaporController],
      providers: [NilaiRaporService],
    }).compile();

    controller = module.get<NilaiRaporController>(NilaiRaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
