import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ValueRiskService } from './value-risk.service'
import { CreateValueRiskDto } from './dto/create-value-risk.dto'
import { UpdateValueRiskDto } from './dto/update-value-risk.dto'

@Controller('value-risk')
export class ValueRiskController {
  constructor(private readonly valueRiskService: ValueRiskService) {}

  @Post()
  create(@Body() createValueRiskDto: CreateValueRiskDto) {
    return this.valueRiskService.create(createValueRiskDto)
  }

  @Get()
  findAll() {
    return this.valueRiskService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valueRiskService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValueRiskDto: UpdateValueRiskDto) {
    return this.valueRiskService.update(+id, updateValueRiskDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valueRiskService.remove(+id)
  }
}
