import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { NetPresentVlaueService } from './net-present-vlaue.service'
import { CreateNetPresentVlaueDto } from './dto/create-net-present-vlaue.dto'
import { UpdateNetPresentVlaueDto } from './dto/update-net-present-vlaue.dto'

@Controller('net-present-vlaue')
export class NetPresentVlaueController {
  constructor(private readonly netPresentVlaueService: NetPresentVlaueService) {}

  @Post()
  create(@Body() createNetPresentVlaueDto: CreateNetPresentVlaueDto) {
    return this.netPresentVlaueService.create(createNetPresentVlaueDto)
  }

  @Get()
  findAll() {
    return this.netPresentVlaueService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.netPresentVlaueService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNetPresentVlaueDto: UpdateNetPresentVlaueDto) {
    return this.netPresentVlaueService.update(+id, updateNetPresentVlaueDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.netPresentVlaueService.remove(+id)
  }
}
