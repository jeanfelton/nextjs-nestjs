import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('GitHub App')
      .setDescription('NestJS API boiler plate')
      .build(),
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT'));
}
bootstrap();
