import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExternalFinnacingNeededService } from './external-finnacing-needed.service'
import { CreateExternalFinnacingNeededDto } from './dto/create-external-finnacing-needed.dto'
import { UpdateExternalFinnacingNeededDto } from './dto/update-external-finnacing-needed.dto'

@Controller('external-finnacing-needed')
export class ExternalFinnacingNeededController {
  constructor(private readonly externalFinnacingNeededService: ExternalFinnacingNeededService) {}

  @Post()
  create(@Body() createExternalFinnacingNeededDto: CreateExternalFinnacingNeededDto) {
    return this.externalFinnacingNeededService.create(createExternalFinnacingNeededDto)
  }

  @Get()
  findAll() {
    return this.externalFinnacingNeededService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalFinnacingNeededService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExternalFinnacingNeededDto: UpdateExternalFinnacingNeededDto
  ) {
    return this.externalFinnacingNeededService.update(+id, updateExternalFinnacingNeededDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.externalFinnacingNeededService.remove(+id)
  }
}
