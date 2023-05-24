import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CapitalSturctureService } from './capital-sturcture.service'
import { CreateCapitalSturctureDto } from './dto/create-capital-sturcture.dto'
import { UpdateCapitalSturctureDto } from './dto/update-capital-sturcture.dto'

@Controller('capital-sturcture')
export class CapitalSturctureController {
  constructor(private readonly capitalSturctureService: CapitalSturctureService) {}

  @Post()
  create(@Body() createCapitalSturctureDto: CreateCapitalSturctureDto) {
    return this.capitalSturctureService.create(createCapitalSturctureDto)
  }

  @Get()
  findAll() {
    return this.capitalSturctureService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capitalSturctureService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapitalSturctureDto: UpdateCapitalSturctureDto) {
    return this.capitalSturctureService.update(+id, updateCapitalSturctureDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capitalSturctureService.remove(+id)
  }
}
