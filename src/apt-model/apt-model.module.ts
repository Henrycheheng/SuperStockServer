import { Module } from '@nestjs/common'
import { AptModelService } from './apt-model.service'
import { AptModelController } from './apt-model.controller'

@Module({
  controllers: [AptModelController],
  providers: [AptModelService],
})
export class AptModelModule {}
