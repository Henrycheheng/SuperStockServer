import { PartialType } from '@nestjs/mapped-types'
import { CreateInvestmentDecisionDto } from './create-investment-decision.dto'

export class UpdateInvestmentDecisionDto extends PartialType(CreateInvestmentDecisionDto) {}
