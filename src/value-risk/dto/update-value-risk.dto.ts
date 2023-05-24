import { PartialType } from '@nestjs/mapped-types'
import { CreateValueRiskDto } from './create-value-risk.dto'

export class UpdateValueRiskDto extends PartialType(CreateValueRiskDto) {}
