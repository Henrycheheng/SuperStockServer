import { Test, TestingModule } from '@nestjs/testing'
import { InvestmentDecisionController } from './investment-decision.controller'
import { InvestmentDecisionService } from './investment-decision.service'

describe('InvestmentDecisionController', () => {
  let controller: InvestmentDecisionController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentDecisionController],
      providers: [InvestmentDecisionService],
    }).compile()

    controller = module.get<InvestmentDecisionController>(InvestmentDecisionController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
