import { Module } from '@nestjs/common'
import { BondService } from './bond.service'
import { BondController } from './bond.controller'

@Module({
  controllers: [BondController],
  providers: [BondService],
})
export class BondModule {}
