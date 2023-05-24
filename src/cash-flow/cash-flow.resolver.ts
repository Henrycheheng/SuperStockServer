import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CashFlowService } from './cash-flow.service'
import { CreateCashFlowInput } from './dto/create-cash-flow.input'
import { UpdateCashFlowInput } from './dto/update-cash-flow.input'

@Resolver('CashFlow')
export class CashFlowResolver {
  constructor(private readonly cashFlowService: CashFlowService) {}

  @Mutation('createCashFlow')
  create(@Args('createCashFlowInput') createCashFlowInput: CreateCashFlowInput) {
    return this.cashFlowService.create(createCashFlowInput)
  }

  @Query('cashFlow')
  findAll() {
    return this.cashFlowService.findAll()
  }

  @Query('cashFlow')
  findOne(@Args('id') id: number) {
    return this.cashFlowService.findOne(id)
  }

  @Mutation('updateCashFlow')
  update(@Args('updateCashFlowInput') updateCashFlowInput: UpdateCashFlowInput) {
    return this.cashFlowService.update(updateCashFlowInput.id, updateCashFlowInput)
  }

  @Mutation('removeCashFlow')
  remove(@Args('id') id: number) {
    return this.cashFlowService.remove(id)
  }
}
