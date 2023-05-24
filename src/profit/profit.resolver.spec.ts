import { Test, TestingModule } from '@nestjs/testing'
import { ProfitResolver } from './profit.resolver'
import { ProfitService } from './profit.service'

describe('ProfitResolver', () => {
  let resolver: ProfitResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfitResolver, ProfitService],
    }).compile()

    resolver = module.get<ProfitResolver>(ProfitResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
