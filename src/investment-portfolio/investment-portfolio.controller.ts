import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { InvestmentPortfolioService } from './investment-portfolio.service'
import { CreateInvestmentPortfolioDto } from './dto/create-investment-portfolio.dto'
import { UpdateInvestmentPortfolioDto } from './dto/update-investment-portfolio.dto'

@Controller('investment-portfolio')
export class InvestmentPortfolioController {
  constructor(private readonly investmentPortfolioService: InvestmentPortfolioService) {}

  @Post()
  create(@Body() createInvestmentPortfolioDto: CreateInvestmentPortfolioDto) {
    return this.investmentPortfolioService.create(createInvestmentPortfolioDto)
  }

  @Get()
  findAll() {
    return this.investmentPortfolioService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentPortfolioService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvestmentPortfolioDto: UpdateInvestmentPortfolioDto
  ) {
    return this.investmentPortfolioService.update(+id, updateInvestmentPortfolioDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investmentPortfolioService.remove(+id)
  }
}
