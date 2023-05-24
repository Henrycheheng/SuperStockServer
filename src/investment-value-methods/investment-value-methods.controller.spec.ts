import { Test, TestingModule } from '@nestjs/testing'
import { InvestmentValueMethodsController } from './investment-value-methods.controller'
import { InvestmentValueMethodsService } from './investment-value-methods.service'

describe('InvestmentValueMethodsController', () => {
  let controller: InvestmentValueMethodsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentValueMethodsController],
      providers: [InvestmentValueMethodsService],
    }).compile()

    controller = module.get<InvestmentValueMethodsController>(InvestmentValueMethodsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
