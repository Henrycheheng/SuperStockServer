import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EquityPolicyService } from './equity-policy.service'
import { CreateEquityPolicyDto } from './dto/create-equity-policy.dto'
import { UpdateEquityPolicyDto } from './dto/update-equity-policy.dto'

@Controller('equity-policy')
export class EquityPolicyController {
  constructor(private readonly equityPolicyService: EquityPolicyService) {}

  @Post()
  create(@Body() createEquityPolicyDto: CreateEquityPolicyDto) {
    return this.equityPolicyService.create(createEquityPolicyDto)
  }

  @Get()
  findAll() {
    return this.equityPolicyService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equityPolicyService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquityPolicyDto: UpdateEquityPolicyDto) {
    return this.equityPolicyService.update(+id, updateEquityPolicyDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equityPolicyService.remove(+id)
  }
}
