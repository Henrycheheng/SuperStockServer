import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { InvestmentValueMethodsService } from './investment-value-methods.service'
import { CreateInvestmentValueMethodDto } from './dto/create-investment-value-method.dto'
import { UpdateInvestmentValueMethodDto } from './dto/update-investment-value-method.dto'

@Controller('investment-value-methods')
export class InvestmentValueMethodsController {
  constructor(private readonly investmentValueMethodsService: InvestmentValueMethodsService) {}

  @Post()
  create(@Body() createInvestmentValueMethodDto: CreateInvestmentValueMethodDto) {
    return this.investmentValueMethodsService.create(createInvestmentValueMethodDto)
  }

  @Get()
  findAll() {
    return this.investmentValueMethodsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentValueMethodsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvestmentValueMethodDto: UpdateInvestmentValueMethodDto
  ) {
    return this.investmentValueMethodsService.update(+id, updateInvestmentValueMethodDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investmentValueMethodsService.remove(+id)
  }
}
