import { Test, TestingModule } from '@nestjs/testing'
import { CaptialCostValueRiskService } from './captial-cost-value-risk.service'

describe('CaptialCostValueRiskService', () => {
  let service: CaptialCostValueRiskService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaptialCostValueRiskService],
    }).compile()

    service = module.get<CaptialCostValueRiskService>(CaptialCostValueRiskService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
