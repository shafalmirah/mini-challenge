import { Test, TestingModule } from '@nestjs/testing';
import { NilaiRaporService } from './nilai-rapor.service';

describe('NilaiRaporService', () => {
  let service: NilaiRaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NilaiRaporService],
    }).compile();

    service = module.get<NilaiRaporService>(NilaiRaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
