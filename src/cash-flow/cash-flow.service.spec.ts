import { Test, TestingModule } from '@nestjs/testing'
import { CashFlowService } from './cash-flow.service'

describe('CashFlowService', () => {
  let service: CashFlowService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashFlowService],
    }).compile()

    service = module.get<CashFlowService>(CashFlowService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
