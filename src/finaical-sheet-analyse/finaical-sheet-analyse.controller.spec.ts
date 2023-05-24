import { Test, TestingModule } from '@nestjs/testing'
import { FinaicalSheetAnalyseController } from './finaical-sheet-analyse.controller'
import { FinaicalSheetAnalyseService } from './finaical-sheet-analyse.service'

describe('FinaicalSheetAnalyseController', () => {
  let controller: FinaicalSheetAnalyseController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinaicalSheetAnalyseController],
      providers: [FinaicalSheetAnalyseService],
    }).compile()

    controller = module.get<FinaicalSheetAnalyseController>(FinaicalSheetAnalyseController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
