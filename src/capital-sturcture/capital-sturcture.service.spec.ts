import { Test, TestingModule } from '@nestjs/testing'
import { CapitalSturctureService } from './capital-sturcture.service'

describe('CapitalSturctureService', () => {
  let service: CapitalSturctureService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapitalSturctureService],
    }).compile()

    service = module.get<CapitalSturctureService>(CapitalSturctureService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
