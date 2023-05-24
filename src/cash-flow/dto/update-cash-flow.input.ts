import { CreateCashFlowInput } from './create-cash-flow.input'
import { PartialType } from '@nestjs/mapped-types'

export class UpdateCashFlowInput extends PartialType(CreateCashFlowInput) {
  id: number
}
