import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateProfitInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
