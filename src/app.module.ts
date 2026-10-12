import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BilanganModule } from './bilangan/bilangan.module';
import { SuhuModule } from './suhu/suhu.module';
import { DeretModule } from './deret/deret.module';
import { NilaiRaporModule } from './nilai-rapor/nilai-rapor.module';
import { KasirModule } from './kasir/kasir.module';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'mini-challenge',
    }),
    BilanganModule,
    SuhuModule,
    DeretModule,
    NilaiRaporModule,
    KasirModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
