import { Module } from '@nestjs/common'
import { CaptialCostValueRiskService } from './captial-cost-value-risk.service'
import { CaptialCostValueRiskController } from './captial-cost-value-risk.controller'

@Module({
  controllers: [CaptialCostValueRiskController],
  providers: [CaptialCostValueRiskService],
})
export class CaptialCostValueRiskModule {}
