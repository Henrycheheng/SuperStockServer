import { Injectable } from '@nestjs/common'
import { CreateExternalFinnacingNeededDto } from './dto/create-external-finnacing-needed.dto'
import { UpdateExternalFinnacingNeededDto } from './dto/update-external-finnacing-needed.dto'

@Injectable()
export class ExternalFinnacingNeededService {
  create(createExternalFinnacingNeededDto: CreateExternalFinnacingNeededDto) {
    return 'This action adds a new externalFinnacingNeeded'
  }

  findAll() {
    return `This action returns all externalFinnacingNeeded`
  }

  findOne(id: number) {
    return `This action returns a #${id} externalFinnacingNeeded`
  }

  update(id: number, updateExternalFinnacingNeededDto: UpdateExternalFinnacingNeededDto) {
    return `This action updates a #${id} externalFinnacingNeeded`
  }

  remove(id: number) {
    return `This action removes a #${id} externalFinnacingNeeded`
  }
}
