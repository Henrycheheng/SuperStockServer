import { Injectable } from '@nestjs/common'
import { CreateInvestmentDecisionDto } from './dto/create-investment-decision.dto'
import { UpdateInvestmentDecisionDto } from './dto/update-investment-decision.dto'

@Injectable()
export class InvestmentDecisionService {
  create(createInvestmentDecisionDto: CreateInvestmentDecisionDto) {
    return 'This action adds a new investmentDecision'
  }

  findAll() {
    return `This action returns all investmentDecision`
  }

  findOne(id: number) {
    return `This action returns a #${id} investmentDecision`
  }

  update(id: number, updateInvestmentDecisionDto: UpdateInvestmentDecisionDto) {
    return `This action updates a #${id} investmentDecision`
  }

  remove(id: number) {
    return `This action removes a #${id} investmentDecision`
  }
}
