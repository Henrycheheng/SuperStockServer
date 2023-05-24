import { Test, TestingModule } from '@nestjs/testing'
import { AptModelService } from './apt-model.service'

describe('AptModelService', () => {
  let service: AptModelService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AptModelService],
    }).compile()

    service = module.get<AptModelService>(AptModelService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
