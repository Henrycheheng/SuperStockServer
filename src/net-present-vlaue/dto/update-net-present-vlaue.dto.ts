import { PartialType } from '@nestjs/mapped-types'
import { CreateNetPresentVlaueDto } from './create-net-present-vlaue.dto'

export class UpdateNetPresentVlaueDto extends PartialType(CreateNetPresentVlaueDto) {}
