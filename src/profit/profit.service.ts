import { Injectable } from '@nestjs/common'
import { CreateProfitInput } from './dto/create-profit.input'
import { UpdateProfitInput } from './dto/update-profit.input'

@Injectable()
export class ProfitService {
  create(createProfitInput: CreateProfitInput) {
    return 'This action adds a new profit'
  }

  findAll() {
    return `This action returns all profit`
  }

  findOne(id: number) {
    return `This action returns a #${id} profit`
  }

  update(id: number, updateProfitInput: UpdateProfitInput) {
    return `This action updates a #${id} profit`
  }

  remove(id: number) {
    return `This action removes a #${id} profit`
  }
}
