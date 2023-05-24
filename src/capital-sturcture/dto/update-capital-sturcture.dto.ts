import { PartialType } from '@nestjs/mapped-types'
import { CreateCapitalSturctureDto } from './create-capital-sturcture.dto'

export class UpdateCapitalSturctureDto extends PartialType(CreateCapitalSturctureDto) {}
