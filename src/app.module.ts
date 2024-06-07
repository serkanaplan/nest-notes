import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/Entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'acer',
    password: '12345',
    database: 'deneme',
    // entities: [User,Product,Category],
    entities:["dist/**/*.entity{.ts,.js}"],//proje derlenirken distin altında toplanır. entityleri tek tek elle vermek yerine direk o dizindeki entity ile biten tüm dosyaları almasını söyledik
    synchronize: true,//mode değişikliklerinde veritabanına otomatik yansıtır ve yeniden başlatır. ama bunu sadece geliştirme aşamasında kullan çünkü sonradan yapılan değişiklikleri eklerken verileri sıfırlıyor porducton ortamına cıkarken bu satırı sil
  }),
  UserModule,
  ProductModule,
  CategoryModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
