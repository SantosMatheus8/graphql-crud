import { Inject, Injectable } from '@nestjs/common';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Category } from './category.entity';
import {
  CategoryInput,
  FindCategoryInput,
  UpdateCategoryInput,
} from './inputes/category.input';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryRepository')
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategory: CategoryInput): Promise<Category> {
    return this.categoryRepository.save(createCategory);
  }

  async findOne(category: FindCategoryInput): Promise<Category> {
    return this.categoryRepository.findOne({ where: { id: category.id } });
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async update(updateCategory: UpdateCategoryInput): Promise<Category> {
    const updateResult = await this.categoryRepository.update(
      updateCategory.id,
      updateCategory,
    );
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Category, updateCategory.id);
    }
    return this.categoryRepository.findOne({
      where: { id: updateCategory.id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
