import { Module } from '@nestjs/common';
import { PostgresTypeOrmConfigModule } from '../../../database/postgres/postgres-type-orm-config.module';
import { UserRepositoryImplemented } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/UserEntity';

@Module({
  imports: [
    PostgresTypeOrmConfigModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserRepositoryImplemented],
  exports: [UserRepositoryImplemented],
})
export class RepositoryModule {}
