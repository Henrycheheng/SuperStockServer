import { Injectable } from '@nestjs/common'
import { CreateInvestmentPortfolioDto } from './dto/create-investment-portfolio.dto'
import { UpdateInvestmentPortfolioDto } from './dto/update-investment-portfolio.dto'

@Injectable()
export class InvestmentPortfolioService {
  create(createInvestmentPortfolioDto: CreateInvestmentPortfolioDto) {
    return 'This action adds a new investmentPortfolio'
  }

  findAll() {
    return `This action returns all investmentPortfolio`
  }

  findOne(id: number) {
    return `This action returns a #${id} investmentPortfolio`
  }

  update(id: number, updateInvestmentPortfolioDto: UpdateInvestmentPortfolioDto) {
    return `This action updates a #${id} investmentPortfolio`
  }

  remove(id: number) {
    return `This action removes a #${id} investmentPortfolio`
  }
}
