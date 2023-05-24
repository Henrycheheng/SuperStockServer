import { Injectable } from '@nestjs/common'
import { CreateCaptModelDto } from './dto/create-capt-model.dto'
import { UpdateCaptModelDto } from './dto/update-capt-model.dto'

@Injectable()
export class CaptModelService {
  create(createCaptModelDto: CreateCaptModelDto) {
    return 'This action adds a new captModel'
  }

  findAll() {
    return `This action returns all captModel`
  }

  findOne(id: number) {
    return `This action returns a #${id} captModel`
  }

  update(id: number, updateCaptModelDto: UpdateCaptModelDto) {
    return `This action updates a #${id} captModel`
  }

  remove(id: number) {
    return `This action removes a #${id} captModel`
  }
}
