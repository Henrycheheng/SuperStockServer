import { Module } from '@nestjs/common'
import { CaptModelService } from './capt-model.service'
import { CaptModelController } from './capt-model.controller'

@Module({
  controllers: [CaptModelController],
  providers: [CaptModelService],
})
export class CaptModelModule {}
