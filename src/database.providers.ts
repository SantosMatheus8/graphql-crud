import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Categories1685529704044 } from './migrations/1685529704044-categories';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
        migrations: [Categories1685529704044],
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [Categories1685529704044],
});
