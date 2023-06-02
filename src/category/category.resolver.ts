import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import {
  CategoryInput,
  FindCategoryInput,
  UpdateCategoryInput,
} from './inputes/category.input';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => CategoryDto)
  async createCategory(@Args('input') input: CategoryInput): Promise<Category> {
    return this.categoryService.create(input);
  }

  @Query(() => CategoryDto)
  async getCategory(
    @Args('input') input: FindCategoryInput,
  ): Promise<Category> {
    return this.categoryService.findOne(input);
  }

  @Query(() => [CategoryDto])
  async listCategories(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Mutation(() => CategoryDto)
  async updateCategory(
    @Args('input') input: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.update(input);
  }

  @Mutation(() => Boolean)
  async remove(@Args('input') input: FindCategoryInput): Promise<boolean> {
    await this.categoryService.delete(input.id);
    return true;
  }
}
