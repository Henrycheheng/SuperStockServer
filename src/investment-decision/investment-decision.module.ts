import { Module } from '@nestjs/common'
import { InvestmentDecisionService } from './investment-decision.service'
import { InvestmentDecisionController } from './investment-decision.controller'

@Module({
  controllers: [InvestmentDecisionController],
  providers: [InvestmentDecisionService],
})
export class InvestmentDecisionModule {}
