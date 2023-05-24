import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { BondService } from './bond.service'
import { CreateBondDto } from './dto/create-bond.dto'
import { UpdateBondDto } from './dto/update-bond.dto'

@Controller('bond')
export class BondController {
  constructor(private readonly bondService: BondService) {}

  @Post()
  create(@Body() createBondDto: CreateBondDto) {
    return this.bondService.create(createBondDto)
  }

  @Get()
  findAll() {
    return this.bondService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bondService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBondDto: UpdateBondDto) {
    return this.bondService.update(+id, updateBondDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bondService.remove(+id)
  }
}
