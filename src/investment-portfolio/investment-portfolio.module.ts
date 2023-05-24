import { Module } from '@nestjs/common'
import { InvestmentPortfolioService } from './investment-portfolio.service'
import { InvestmentPortfolioController } from './investment-portfolio.controller'

@Module({
  controllers: [InvestmentPortfolioController],
  providers: [InvestmentPortfolioService],
})
export class InvestmentPortfolioModule {}
