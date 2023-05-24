import { Test, TestingModule } from '@nestjs/testing'
import { AptModelController } from './apt-model.controller'
import { AptModelService } from './apt-model.service'

describe('AptModelController', () => {
  let controller: AptModelController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AptModelController],
      providers: [AptModelService],
    }).compile()

    controller = module.get<AptModelController>(AptModelController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
