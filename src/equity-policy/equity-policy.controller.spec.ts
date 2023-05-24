import { Test, TestingModule } from '@nestjs/testing'
import { EquityPolicyController } from './equity-policy.controller'
import { EquityPolicyService } from './equity-policy.service'

describe('EquityPolicyController', () => {
  let controller: EquityPolicyController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquityPolicyController],
      providers: [EquityPolicyService],
    }).compile()

    controller = module.get<EquityPolicyController>(EquityPolicyController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
