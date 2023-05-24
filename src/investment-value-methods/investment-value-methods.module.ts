import { Module } from '@nestjs/common'
import { InvestmentValueMethodsService } from './investment-value-methods.service'
import { InvestmentValueMethodsController } from './investment-value-methods.controller'

@Module({
  controllers: [InvestmentValueMethodsController],
  providers: [InvestmentValueMethodsService],
})
export class InvestmentValueMethodsModule {}
