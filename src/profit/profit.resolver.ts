import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ProfitService } from './profit.service'
import { Profit } from './entities/profit.entity'
import { CreateProfitInput } from './dto/create-profit.input'
import { UpdateProfitInput } from './dto/update-profit.input'

@Resolver(() => Profit)
export class ProfitResolver {
  constructor(private readonly profitService: ProfitService) {}

  @Mutation(() => Profit)
  createProfit(@Args('createProfitInput') createProfitInput: CreateProfitInput) {
    return this.profitService.create(createProfitInput)
  }

  @Query(() => [Profit], { name: 'profit' })
  findAll() {
    return this.profitService.findAll()
  }

  @Query(() => Profit, { name: 'profit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profitService.findOne(id)
  }

  @Mutation(() => Profit)
  updateProfit(@Args('updateProfitInput') updateProfitInput: UpdateProfitInput) {
    return this.profitService.update(updateProfitInput.id, updateProfitInput)
  }

  @Mutation(() => Profit)
  removeProfit(@Args('id', { type: () => Int }) id: number) {
    return this.profitService.remove(id)
  }
}
