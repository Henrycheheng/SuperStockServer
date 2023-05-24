import { Test, TestingModule } from '@nestjs/testing'
import { CaptialCostValueRiskController } from './captial-cost-value-risk.controller'
import { CaptialCostValueRiskService } from './captial-cost-value-risk.service'

describe('CaptialCostValueRiskController', () => {
  let controller: CaptialCostValueRiskController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaptialCostValueRiskController],
      providers: [CaptialCostValueRiskService],
    }).compile()

    controller = module.get<CaptialCostValueRiskController>(CaptialCostValueRiskController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
