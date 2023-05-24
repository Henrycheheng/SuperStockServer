import { PartialType } from '@nestjs/mapped-types'
import { CreateEquityPolicyDto } from './create-equity-policy.dto'

export class UpdateEquityPolicyDto extends PartialType(CreateEquityPolicyDto) {}
