import { Module } from '@nestjs/common'
import { ExternalFinnacingNeededService } from './external-finnacing-needed.service'
import { ExternalFinnacingNeededController } from './external-finnacing-needed.controller'

@Module({
  controllers: [ExternalFinnacingNeededController],
  providers: [ExternalFinnacingNeededService],
})
export class ExternalFinnacingNeededModule {}
