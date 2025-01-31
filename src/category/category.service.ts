import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryDto) :Promise<Category> {
    const category =this.categoryRepository.create(createCategoryDto)
    await this.categoryRepository.save(category)
    return category
  }

  async findAll() :Promise<Category[]> {
    return await this.categoryRepository.find()
  }

 async findOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOneBy({ id })
    
  }

 async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, updateCategoryDto)
    return await this.categoryRepository.findOneBy({ id })
  }

 async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id)
  }
}
