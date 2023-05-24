import { Module } from '@nestjs/common'
import { FinaicalSheetAnalyseService } from './finaical-sheet-analyse.service'
import { FinaicalSheetAnalyseController } from './finaical-sheet-analyse.controller'

@Module({
  controllers: [FinaicalSheetAnalyseController],
  providers: [FinaicalSheetAnalyseService],
})
export class FinaicalSheetAnalyseModule {}
