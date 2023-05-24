import { CreateProfitInput } from './create-profit.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateProfitInput extends PartialType(CreateProfitInput) {
  @Field(() => Int)
  id: number
}
