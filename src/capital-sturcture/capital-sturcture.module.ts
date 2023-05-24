import { Module } from '@nestjs/common'
import { CapitalSturctureService } from './capital-sturcture.service'
import { CapitalSturctureController } from './capital-sturcture.controller'

@Module({
  controllers: [CapitalSturctureController],
  providers: [CapitalSturctureService],
})
export class CapitalSturctureModule {}
