import { Injectable } from '@nestjs/common'
import { CreateNetPresentVlaueDto } from './dto/create-net-present-vlaue.dto'
import { UpdateNetPresentVlaueDto } from './dto/update-net-present-vlaue.dto'

@Injectable()
export class NetPresentVlaueService {
  create(createNetPresentVlaueDto: CreateNetPresentVlaueDto) {
    return 'This action adds a new netPresentVlaue'
  }

  findAll() {
    return `This action returns all netPresentVlaue`
  }

  findOne(id: number) {
    return `This action returns a #${id} netPresentVlaue`
  }

  update(id: number, updateNetPresentVlaueDto: UpdateNetPresentVlaueDto) {
    return `This action updates a #${id} netPresentVlaue`
  }

  remove(id: number) {
    return `This action removes a #${id} netPresentVlaue`
  }
}
