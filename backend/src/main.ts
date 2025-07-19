// backend/src/main.ts

// Polyfill for crypto if it's not available on the global scope
import { webcrypto } from 'node:crypto';

if (!globalThis.crypto) {
  // @ts-ignore
  globalThis.crypto = webcrypto;
}

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable validation pipes
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Enable CORS
  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();