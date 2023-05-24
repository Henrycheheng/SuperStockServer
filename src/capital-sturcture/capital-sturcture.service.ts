import { Injectable } from '@nestjs/common'
import { CreateCapitalSturctureDto } from './dto/create-capital-sturcture.dto'
import { UpdateCapitalSturctureDto } from './dto/update-capital-sturcture.dto'

@Injectable()
export class CapitalSturctureService {
  create(createCapitalSturctureDto: CreateCapitalSturctureDto) {
    return 'This action adds a new capitalSturcture'
  }

  findAll() {
    return `This action returns all capitalSturcture`
  }

  findOne(id: number) {
    return `This action returns a #${id} capitalSturcture`
  }

  update(id: number, updateCapitalSturctureDto: UpdateCapitalSturctureDto) {
    return `This action updates a #${id} capitalSturcture`
  }

  remove(id: number) {
    return `This action removes a #${id} capitalSturcture`
  }
}
