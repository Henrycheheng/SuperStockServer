import { Test, TestingModule } from '@nestjs/testing'
import { ValueRiskService } from './value-risk.service'

describe('ValueRiskService', () => {
  let service: ValueRiskService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValueRiskService],
    }).compile()

    service = module.get<ValueRiskService>(ValueRiskService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
