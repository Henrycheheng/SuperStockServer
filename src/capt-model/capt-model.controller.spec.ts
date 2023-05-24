import { Test, TestingModule } from '@nestjs/testing'
import { CaptModelController } from './capt-model.controller'
import { CaptModelService } from './capt-model.service'

describe('CaptModelController', () => {
  let controller: CaptModelController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaptModelController],
      providers: [CaptModelService],
    }).compile()

    controller = module.get<CaptModelController>(CaptModelController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
