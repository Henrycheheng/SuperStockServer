import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CaptModelService } from './capt-model.service'
import { CreateCaptModelDto } from './dto/create-capt-model.dto'
import { UpdateCaptModelDto } from './dto/update-capt-model.dto'

@Controller('capt-model')
export class CaptModelController {
  constructor(private readonly captModelService: CaptModelService) {}

  @Post()
  create(@Body() createCaptModelDto: CreateCaptModelDto) {
    return this.captModelService.create(createCaptModelDto)
  }

  @Get()
  findAll() {
    return this.captModelService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.captModelService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaptModelDto: UpdateCaptModelDto) {
    return this.captModelService.update(+id, updateCaptModelDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.captModelService.remove(+id)
  }
}
