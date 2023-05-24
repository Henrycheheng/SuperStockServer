import { PartialType } from '@nestjs/mapped-types'
import { CreateInvestmentPortfolioDto } from './create-investment-portfolio.dto'

export class UpdateInvestmentPortfolioDto extends PartialType(CreateInvestmentPortfolioDto) {}
