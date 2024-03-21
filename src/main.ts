import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'; // Correct import statement

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Define CORS options
   const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Define which HTTP methods are allowed
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // Allow sending cookies and other credentials
  };

  // Enable CORS with the defined options
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
