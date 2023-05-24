import { Test, TestingModule } from '@nestjs/testing'
import { InvestmentDecisionService } from './investment-decision.service'

describe('InvestmentDecisionService', () => {
  let service: InvestmentDecisionService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentDecisionService],
    }).compile()

    service = module.get<InvestmentDecisionService>(InvestmentDecisionService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
