import { UserRepository } from '../../../../domain/repositories/user.repository';
import { User } from '../../../../domain/model/User';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/UserEntity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImplemented implements UserRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const entity = await this.userRepository.find();
    return entity.map((entity) => this.toDomain(entity));
  }

  toDomain(entity: UserEntity): User {
    return new User({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      password: entity.password,
    });
  }

  toEntity(domain: User): Partial<UserEntity> {
    return {
      name: domain.name,
      email: domain.email,
      password: domain.password,
    };
  }
}
