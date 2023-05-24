import { Module } from '@nestjs/common'
import { BanlanceSheetService } from './banlance-sheet.service'
import { BanlanceSheetController } from './banlance-sheet.controller'

@Module({
  controllers: [BanlanceSheetController],
  providers: [BanlanceSheetService],
})
export class BanlanceSheetModule {}
