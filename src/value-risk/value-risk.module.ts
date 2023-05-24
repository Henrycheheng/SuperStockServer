import { Module } from '@nestjs/common'
import { ValueRiskService } from './value-risk.service'
import { ValueRiskController } from './value-risk.controller'

@Module({
  controllers: [ValueRiskController],
  providers: [ValueRiskService],
})
export class ValueRiskModule {}
