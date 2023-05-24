import { Test, TestingModule } from '@nestjs/testing'
import { FinaicalSheetAnalyseService } from './finaical-sheet-analyse.service'

describe('FinaicalSheetAnalyseService', () => {
  let service: FinaicalSheetAnalyseService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinaicalSheetAnalyseService],
    }).compile()

    service = module.get<FinaicalSheetAnalyseService>(FinaicalSheetAnalyseService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
