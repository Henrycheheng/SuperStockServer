import { Test, TestingModule } from '@nestjs/testing'
import { ValueRiskController } from './value-risk.controller'
import { ValueRiskService } from './value-risk.service'

describe('ValueRiskController', () => {
  let controller: ValueRiskController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValueRiskController],
      providers: [ValueRiskService],
    }).compile()

    controller = module.get<ValueRiskController>(ValueRiskController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
