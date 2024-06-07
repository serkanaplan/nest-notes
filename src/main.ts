// nest new project-name :proje oluşturur
// cd user && nest generate interface user
// nest generate module module-name :module oluşturur
// nest generate service service-name :service oluşturur
// nest generate controller controller-name :controller oluşturur
// nest generate middleware middleware-name :middleware oluşturur
// nest generate guard guard-name :guard oluşturur. Guard'lar, belirli istekleri izin verilip verilmeyeceğini kontrol eden bileşenlerdir.
// nest generate interceptor interceptor-name :interceptor oluşturur.  Interceptor'ler, gelen istekleri işlemeden önce veya sonra araya girebilen ve isteği değiştirebilen bileşenlerdir.
// nest generate pipe pipe-name :pipe oluşturur. Pipe'ler, gelen verileri işleyen ve dönüştüren bileşenlerdir.
// nest generate resource resource-name :resource oluşturur.CRUD (Create, Read, Update, Delete) API için scaffold (iskelet) oluşturmak için kullanılır. Bu komut, bir isim belirtilen resource-name parametresiyle birlikte kullanılır ve ilgili controller, service ve diğer bileşenleri otomatik olarak oluşturur.


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());


  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

