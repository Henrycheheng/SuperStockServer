import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Profit {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
