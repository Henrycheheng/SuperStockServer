import { Injectable } from '@nestjs/common'
import { CreateCaptialCostValueRiskDto } from './dto/create-captial-cost-value-risk.dto'
import { UpdateCaptialCostValueRiskDto } from './dto/update-captial-cost-value-risk.dto'

@Injectable()
export class CaptialCostValueRiskService {
  create(createCaptialCostValueRiskDto: CreateCaptialCostValueRiskDto) {
    return 'This action adds a new captialCostValueRisk'
  }

  findAll() {
    return `This action returns all captialCostValueRisk`
  }

  findOne(id: number) {
    return `This action returns a #${id} captialCostValueRisk`
  }

  update(id: number, updateCaptialCostValueRiskDto: UpdateCaptialCostValueRiskDto) {
    return `This action updates a #${id} captialCostValueRisk`
  }

  remove(id: number) {
    return `This action removes a #${id} captialCostValueRisk`
  }
}
