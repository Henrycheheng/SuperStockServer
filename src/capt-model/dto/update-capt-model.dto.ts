import { PartialType } from '@nestjs/mapped-types'
import { CreateCaptModelDto } from './create-capt-model.dto'

export class UpdateCaptModelDto extends PartialType(CreateCaptModelDto) {}
