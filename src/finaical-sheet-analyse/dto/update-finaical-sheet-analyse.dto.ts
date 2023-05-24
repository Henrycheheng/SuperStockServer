import { PartialType } from '@nestjs/mapped-types'
import { CreateFinaicalSheetAnalyseDto } from './create-finaical-sheet-analyse.dto'

export class UpdateFinaicalSheetAnalyseDto extends PartialType(CreateFinaicalSheetAnalyseDto) {}
