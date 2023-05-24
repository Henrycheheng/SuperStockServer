import { Injectable } from '@nestjs/common'
import { CreateEquityPolicyDto } from './dto/create-equity-policy.dto'
import { UpdateEquityPolicyDto } from './dto/update-equity-policy.dto'

@Injectable()
export class EquityPolicyService {
  create(createEquityPolicyDto: CreateEquityPolicyDto) {
    return 'This action adds a new equityPolicy'
  }

  findAll() {
    return `This action returns all equityPolicy`
  }

  findOne(id: number) {
    return `This action returns a #${id} equityPolicy`
  }

  update(id: number, updateEquityPolicyDto: UpdateEquityPolicyDto) {
    return `This action updates a #${id} equityPolicy`
  }

  remove(id: number) {
    return `This action removes a #${id} equityPolicy`
  }
}
