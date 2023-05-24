import { PartialType } from '@nestjs/mapped-types'
import { CreateCaptialCostValueRiskDto } from './create-captial-cost-value-risk.dto'

export class UpdateCaptialCostValueRiskDto extends PartialType(CreateCaptialCostValueRiskDto) {}
