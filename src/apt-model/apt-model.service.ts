import { Injectable } from '@nestjs/common'
import { CreateAptModelDto } from './dto/create-apt-model.dto'
import { UpdateAptModelDto } from './dto/update-apt-model.dto'

@Injectable()
export class AptModelService {
  create(createAptModelDto: CreateAptModelDto) {
    return 'This action adds a new aptModel'
  }

  findAll() {
    return `This action returns all aptModel`
  }

  findOne(id: number) {
    return `This action returns a #${id} aptModel`
  }

  update(id: number, updateAptModelDto: UpdateAptModelDto) {
    return `This action updates a #${id} aptModel`
  }

  remove(id: number) {
    return `This action removes a #${id} aptModel`
  }
}
