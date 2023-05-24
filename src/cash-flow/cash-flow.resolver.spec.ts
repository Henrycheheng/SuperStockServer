import { Test, TestingModule } from '@nestjs/testing'
import { CashFlowResolver } from './cash-flow.resolver'
import { CashFlowService } from './cash-flow.service'

describe('CashFlowResolver', () => {
  let resolver: CashFlowResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashFlowResolver, CashFlowService],
    }).compile()

    resolver = module.get<CashFlowResolver>(CashFlowResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
