import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { AptModelService } from './apt-model.service'
import { CreateAptModelDto } from './dto/create-apt-model.dto'
import { UpdateAptModelDto } from './dto/update-apt-model.dto'

@Controller('apt-model')
export class AptModelController {
  constructor(private readonly aptModelService: AptModelService) {}

  @Post()
  create(@Body() createAptModelDto: CreateAptModelDto) {
    return this.aptModelService.create(createAptModelDto)
  }

  @Get()
  findAll() {
    return this.aptModelService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aptModelService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAptModelDto: UpdateAptModelDto) {
    return this.aptModelService.update(+id, updateAptModelDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aptModelService.remove(+id)
  }
}
