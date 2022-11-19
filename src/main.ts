import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  console.log('the app is listening on port: http://localhost:3000')
}
bootstrap()
