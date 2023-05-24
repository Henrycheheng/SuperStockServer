import { Module } from '@nestjs/common'
import { NetPresentVlaueService } from './net-present-vlaue.service'
import { NetPresentVlaueController } from './net-present-vlaue.controller'

@Module({
  controllers: [NetPresentVlaueController],
  providers: [NetPresentVlaueService],
})
export class NetPresentVlaueModule {}
