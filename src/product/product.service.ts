import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

  async create(createProductDto: CreateProductDto) : Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    await this.productRepository.save(product);

    return product;
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

 async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

 async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    await this.productRepository.update(id, updateProductDto);
    return await this.productRepository.findOneBy({ id });
  }

 async remove(id: number) : Promise<void> {
    await this.productRepository.delete(id);
  }
}
