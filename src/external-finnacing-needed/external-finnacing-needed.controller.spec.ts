import { Test, TestingModule } from '@nestjs/testing'
import { ExternalFinnacingNeededController } from './external-finnacing-needed.controller'
import { ExternalFinnacingNeededService } from './external-finnacing-needed.service'

describe('ExternalFinnacingNeededController', () => {
  let controller: ExternalFinnacingNeededController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalFinnacingNeededController],
      providers: [ExternalFinnacingNeededService],
    }).compile()

    controller = module.get<ExternalFinnacingNeededController>(ExternalFinnacingNeededController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
