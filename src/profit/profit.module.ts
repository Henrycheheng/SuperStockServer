import { Module } from '@nestjs/common'
import { ProfitService } from './profit.service'
import { ProfitResolver } from './profit.resolver'

@Module({
  providers: [ProfitResolver, ProfitService],
})
export class ProfitModule {}
