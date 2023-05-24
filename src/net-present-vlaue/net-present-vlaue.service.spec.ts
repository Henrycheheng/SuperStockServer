import { Test, TestingModule } from '@nestjs/testing'
import { NetPresentVlaueService } from './net-present-vlaue.service'

describe('NetPresentVlaueService', () => {
  let service: NetPresentVlaueService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetPresentVlaueService],
    }).compile()

    service = module.get<NetPresentVlaueService>(NetPresentVlaueService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
