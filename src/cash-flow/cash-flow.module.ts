import { Module } from '@nestjs/common'
import { CashFlowService } from './cash-flow.service'
import { CashFlowResolver } from './cash-flow.resolver'

@Module({
  providers: [CashFlowResolver, CashFlowService],
})
export class CashFlowModule {}
