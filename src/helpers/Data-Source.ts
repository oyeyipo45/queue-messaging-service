import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'damilolaoyeyipo',
  password: 'Kolade11.',
  database: 'messsaging_users',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
