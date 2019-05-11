import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // 1. Tslint works in general:
  console.log(1);
}

// 2. Disabled IDEA Warning && 3. this should lead to tslint error 'Promises must be handled appropriately' (see ./node_modules/.bin/tslint -p tsconfig.json src/main.ts)
// noinspection JSIgnoredPromiseFromCall
bootstrap();
