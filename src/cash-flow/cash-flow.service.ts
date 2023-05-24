import { Injectable } from '@nestjs/common'
import { CreateCashFlowInput } from './dto/create-cash-flow.input'
import { UpdateCashFlowInput } from './dto/update-cash-flow.input'

@Injectable()
export class CashFlowService {
  create(createCashFlowInput: CreateCashFlowInput) {
    return 'This action adds a new cashFlow'
  }

  findAll() {
    return `This action returns all cashFlow`
  }

  findOne(id: number) {
    return `This action returns a #${id} cashFlow`
  }

  update(id: number, updateCashFlowInput: UpdateCashFlowInput) {
    return `This action updates a #${id} cashFlow`
  }

  remove(id: number) {
    return `This action removes a #${id} cashFlow`
  }
}
