import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { InvestmentDecisionService } from './investment-decision.service'
import { CreateInvestmentDecisionDto } from './dto/create-investment-decision.dto'
import { UpdateInvestmentDecisionDto } from './dto/update-investment-decision.dto'

@Controller('investment-decision')
export class InvestmentDecisionController {
  constructor(private readonly investmentDecisionService: InvestmentDecisionService) {}

  @Post()
  create(@Body() createInvestmentDecisionDto: CreateInvestmentDecisionDto) {
    return this.investmentDecisionService.create(createInvestmentDecisionDto)
  }

  @Get()
  findAll() {
    return this.investmentDecisionService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentDecisionService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvestmentDecisionDto: UpdateInvestmentDecisionDto
  ) {
    return this.investmentDecisionService.update(+id, updateInvestmentDecisionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investmentDecisionService.remove(+id)
  }
}
