import { Module } from '@nestjs/common'
import { EquityPolicyService } from './equity-policy.service'
import { EquityPolicyController } from './equity-policy.controller'

@Module({
  controllers: [EquityPolicyController],
  providers: [EquityPolicyService],
})
export class EquityPolicyModule {}
