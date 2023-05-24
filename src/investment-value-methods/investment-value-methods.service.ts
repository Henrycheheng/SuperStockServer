import { Injectable } from '@nestjs/common'
import { CreateInvestmentValueMethodDto } from './dto/create-investment-value-method.dto'
import { UpdateInvestmentValueMethodDto } from './dto/update-investment-value-method.dto'

@Injectable()
export class InvestmentValueMethodsService {
  create(createInvestmentValueMethodDto: CreateInvestmentValueMethodDto) {
    return 'This action adds a new investmentValueMethod'
  }

  findAll() {
    return `This action returns all investmentValueMethods`
  }

  findOne(id: number) {
    return `This action returns a #${id} investmentValueMethod`
  }

  update(id: number, updateInvestmentValueMethodDto: UpdateInvestmentValueMethodDto) {
    return `This action updates a #${id} investmentValueMethod`
  }

  remove(id: number) {
    return `This action removes a #${id} investmentValueMethod`
  }
}
