import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.use(
      session({
        secret: 'secretklmne',
        resave: true,
        saveUninitialized: false
      }),
  );
  app.enableCors();
  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`));
}

bootstrap();
