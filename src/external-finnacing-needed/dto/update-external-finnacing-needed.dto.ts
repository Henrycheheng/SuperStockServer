import { PartialType } from '@nestjs/mapped-types'
import { CreateExternalFinnacingNeededDto } from './create-external-finnacing-needed.dto'

export class UpdateExternalFinnacingNeededDto extends PartialType(
  CreateExternalFinnacingNeededDto
) {}
