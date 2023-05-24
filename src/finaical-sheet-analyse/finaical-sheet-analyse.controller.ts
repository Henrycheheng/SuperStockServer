import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { FinaicalSheetAnalyseService } from './finaical-sheet-analyse.service'
import { CreateFinaicalSheetAnalyseDto } from './dto/create-finaical-sheet-analyse.dto'
import { UpdateFinaicalSheetAnalyseDto } from './dto/update-finaical-sheet-analyse.dto'

@Controller('finaical-sheet-analyse')
export class FinaicalSheetAnalyseController {
  constructor(private readonly finaicalSheetAnalyseService: FinaicalSheetAnalyseService) {}

  @Post()
  create(@Body() createFinaicalSheetAnalyseDto: CreateFinaicalSheetAnalyseDto) {
    return this.finaicalSheetAnalyseService.create(createFinaicalSheetAnalyseDto)
  }

  @Get()
  findAll() {
    return this.finaicalSheetAnalyseService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finaicalSheetAnalyseService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinaicalSheetAnalyseDto: UpdateFinaicalSheetAnalyseDto
  ) {
    return this.finaicalSheetAnalyseService.update(+id, updateFinaicalSheetAnalyseDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finaicalSheetAnalyseService.remove(+id)
  }
}
