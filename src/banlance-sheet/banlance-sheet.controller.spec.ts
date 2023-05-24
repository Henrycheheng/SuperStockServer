import { Test, TestingModule } from '@nestjs/testing'
import { BanlanceSheetController } from './banlance-sheet.controller'
import { BanlanceSheetService } from './banlance-sheet.service'

describe('BanlanceSheetController', () => {
  let controller: BanlanceSheetController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanlanceSheetController],
      providers: [BanlanceSheetService],
    }).compile()

    controller = module.get<BanlanceSheetController>(BanlanceSheetController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
