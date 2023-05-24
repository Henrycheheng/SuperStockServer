import { Injectable } from '@nestjs/common'
import { CreateFinaicalSheetAnalyseDto } from './dto/create-finaical-sheet-analyse.dto'
import { UpdateFinaicalSheetAnalyseDto } from './dto/update-finaical-sheet-analyse.dto'

@Injectable()
export class FinaicalSheetAnalyseService {
  create(createFinaicalSheetAnalyseDto: CreateFinaicalSheetAnalyseDto) {
    return 'This action adds a new finaicalSheetAnalyse'
  }

  findAll() {
    return `This action returns all finaicalSheetAnalyse`
  }

  findOne(id: number) {
    return `This action returns a #${id} finaicalSheetAnalyse`
  }

  update(id: number, updateFinaicalSheetAnalyseDto: UpdateFinaicalSheetAnalyseDto) {
    return `This action updates a #${id} finaicalSheetAnalyse`
  }

  remove(id: number) {
    return `This action removes a #${id} finaicalSheetAnalyse`
  }
}
