import { PartialType } from '@nestjs/mapped-types'
import { CreateBondDto } from './create-bond.dto'

export class UpdateBondDto extends PartialType(CreateBondDto) {}
