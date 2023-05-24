import { PartialType } from '@nestjs/mapped-types'
import { CreateAptModelDto } from './create-apt-model.dto'

export class UpdateAptModelDto extends PartialType(CreateAptModelDto) {}
