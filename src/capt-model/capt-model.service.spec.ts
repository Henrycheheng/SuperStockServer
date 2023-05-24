import { Test, TestingModule } from '@nestjs/testing'
import { CaptModelService } from './capt-model.service'

describe('CaptModelService', () => {
  let service: CaptModelService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaptModelService],
    }).compile()

    service = module.get<CaptModelService>(CaptModelService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
