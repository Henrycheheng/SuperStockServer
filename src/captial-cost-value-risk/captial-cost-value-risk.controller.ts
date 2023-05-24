import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CaptialCostValueRiskService } from './captial-cost-value-risk.service'
import { CreateCaptialCostValueRiskDto } from './dto/create-captial-cost-value-risk.dto'
import { UpdateCaptialCostValueRiskDto } from './dto/update-captial-cost-value-risk.dto'

@Controller('captial-cost-value-risk')
export class CaptialCostValueRiskController {
  constructor(private readonly captialCostValueRiskService: CaptialCostValueRiskService) {}

  @Post()
  create(@Body() createCaptialCostValueRiskDto: CreateCaptialCostValueRiskDto) {
    return this.captialCostValueRiskService.create(createCaptialCostValueRiskDto)
  }

  @Get()
  findAll() {
    return this.captialCostValueRiskService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.captialCostValueRiskService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCaptialCostValueRiskDto: UpdateCaptialCostValueRiskDto
  ) {
    return this.captialCostValueRiskService.update(+id, updateCaptialCostValueRiskDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.captialCostValueRiskService.remove(+id)
  }
}
