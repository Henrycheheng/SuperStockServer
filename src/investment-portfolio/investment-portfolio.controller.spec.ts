import { Test, TestingModule } from '@nestjs/testing'
import { InvestmentPortfolioController } from './investment-portfolio.controller'
import { InvestmentPortfolioService } from './investment-portfolio.service'

describe('InvestmentPortfolioController', () => {
  let controller: InvestmentPortfolioController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentPortfolioController],
      providers: [InvestmentPortfolioService],
    }).compile()

    controller = module.get<InvestmentPortfolioController>(InvestmentPortfolioController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
