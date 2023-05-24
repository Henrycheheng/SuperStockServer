import { Test, TestingModule } from '@nestjs/testing'
import { InvestmentValueMethodsService } from './investment-value-methods.service'

describe('InvestmentValueMethodsService', () => {
  let service: InvestmentValueMethodsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentValueMethodsService],
    }).compile()

    service = module.get<InvestmentValueMethodsService>(InvestmentValueMethodsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
