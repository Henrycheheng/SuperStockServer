import { Test, TestingModule } from '@nestjs/testing'
import { BondController } from './bond.controller'
import { BondService } from './bond.service'

describe('BondController', () => {
  let controller: BondController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BondController],
      providers: [BondService],
    }).compile()

    controller = module.get<BondController>(BondController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
