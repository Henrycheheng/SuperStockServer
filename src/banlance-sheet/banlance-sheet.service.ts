import { Injectable } from '@nestjs/common'
import { CreateBanlanceSheetDto } from './dto/create-banlance-sheet.dto'
import { UpdateBanlanceSheetDto } from './dto/update-banlance-sheet.dto'

@Injectable()
export class BanlanceSheetService {
  create(createBanlanceSheetDto: CreateBanlanceSheetDto) {
    return 'This action adds a new banlanceSheet'
  }

  findAll() {
    return `This action returns all banlanceSheet`
  }

  findOne(id: number) {
    return `This action returns a #${id} banlanceSheet`
  }

  update(id: number, updateBanlanceSheetDto: UpdateBanlanceSheetDto) {
    return `This action updates a #${id} banlanceSheet`
  }

  remove(id: number) {
    return `This action removes a #${id} banlanceSheet`
  }
}
