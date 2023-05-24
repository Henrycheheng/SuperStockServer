import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { BanlanceSheetService } from './banlance-sheet.service'
import { CreateBanlanceSheetDto } from './dto/create-banlance-sheet.dto'
import { UpdateBanlanceSheetDto } from './dto/update-banlance-sheet.dto'

@Controller('banlance-sheet')
export class BanlanceSheetController {
  constructor(private readonly banlanceSheetService: BanlanceSheetService) {}

  @Post()
  create(@Body() createBanlanceSheetDto: CreateBanlanceSheetDto) {
    return this.banlanceSheetService.create(createBanlanceSheetDto)
  }

  @Get()
  findAll() {
    return this.banlanceSheetService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banlanceSheetService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanlanceSheetDto: UpdateBanlanceSheetDto) {
    return this.banlanceSheetService.update(+id, updateBanlanceSheetDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banlanceSheetService.remove(+id)
  }
}
