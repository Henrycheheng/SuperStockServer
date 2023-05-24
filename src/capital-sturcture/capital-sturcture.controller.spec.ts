import { Test, TestingModule } from '@nestjs/testing'
import { CapitalSturctureController } from './capital-sturcture.controller'
import { CapitalSturctureService } from './capital-sturcture.service'

describe('CapitalSturctureController', () => {
  let controller: CapitalSturctureController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapitalSturctureController],
      providers: [CapitalSturctureService],
    }).compile()

    controller = module.get<CapitalSturctureController>(CapitalSturctureController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
