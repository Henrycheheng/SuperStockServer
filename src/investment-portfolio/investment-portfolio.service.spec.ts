import { Test, TestingModule } from '@nestjs/testing'
import { InvestmentPortfolioService } from './investment-portfolio.service'

describe('InvestmentPortfolioService', () => {
  let service: InvestmentPortfolioService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentPortfolioService],
    }).compile()

    service = module.get<InvestmentPortfolioService>(InvestmentPortfolioService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
