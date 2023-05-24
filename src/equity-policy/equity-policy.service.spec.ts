import { Test, TestingModule } from '@nestjs/testing'
import { EquityPolicyService } from './equity-policy.service'

describe('EquityPolicyService', () => {
  let service: EquityPolicyService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquityPolicyService],
    }).compile()

    service = module.get<EquityPolicyService>(EquityPolicyService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
