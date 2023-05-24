import { PartialType } from '@nestjs/mapped-types'
import { CreateInvestmentValueMethodDto } from './create-investment-value-method.dto'

export class UpdateInvestmentValueMethodDto extends PartialType(CreateInvestmentValueMethodDto) {}
