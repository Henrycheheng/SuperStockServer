import { Test, TestingModule } from '@nestjs/testing'
import { ExternalFinnacingNeededService } from './external-finnacing-needed.service'

describe('ExternalFinnacingNeededService', () => {
  let service: ExternalFinnacingNeededService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalFinnacingNeededService],
    }).compile()

    service = module.get<ExternalFinnacingNeededService>(ExternalFinnacingNeededService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
