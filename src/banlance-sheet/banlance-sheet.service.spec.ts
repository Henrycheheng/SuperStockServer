import { Test, TestingModule } from '@nestjs/testing'
import { BanlanceSheetService } from './banlance-sheet.service'

describe('BanlanceSheetService', () => {
  let service: BanlanceSheetService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanlanceSheetService],
    }).compile()

    service = module.get<BanlanceSheetService>(BanlanceSheetService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
