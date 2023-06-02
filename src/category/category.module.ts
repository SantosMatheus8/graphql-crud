import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DataSource } from 'typeorm';
import { CategoryResolver } from './category.resolver';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

const categoryProviders = [
  {
    provide: 'CategoryRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [CategoryResolver, CategoryService, ...categoryProviders],
})
export class CategoryModule {}
