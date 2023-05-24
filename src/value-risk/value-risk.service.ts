import { Injectable } from '@nestjs/common'
import { CreateValueRiskDto } from './dto/create-value-risk.dto'
import { UpdateValueRiskDto } from './dto/update-value-risk.dto'

@Injectable()
export class ValueRiskService {
  create(createValueRiskDto: CreateValueRiskDto) {
    return 'This action adds a new valueRisk'
  }

  findAll() {
    return `This action returns all valueRisk`
  }

  findOne(id: number) {
    return `This action returns a #${id} valueRisk`
  }

  update(id: number, updateValueRiskDto: UpdateValueRiskDto) {
    return `This action updates a #${id} valueRisk`
  }

  remove(id: number) {
    return `This action removes a #${id} valueRisk`
  }
}
