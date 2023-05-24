import { Test, TestingModule } from '@nestjs/testing'
import { NetPresentVlaueController } from './net-present-vlaue.controller'
import { NetPresentVlaueService } from './net-present-vlaue.service'

describe('NetPresentVlaueController', () => {
  let controller: NetPresentVlaueController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetPresentVlaueController],
      providers: [NetPresentVlaueService],
    }).compile()

    controller = module.get<NetPresentVlaueController>(NetPresentVlaueController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
