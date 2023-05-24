import { PartialType } from '@nestjs/mapped-types'
import { CreateBanlanceSheetDto } from './create-banlance-sheet.dto'

export class UpdateBanlanceSheetDto extends PartialType(CreateBanlanceSheetDto) {}
