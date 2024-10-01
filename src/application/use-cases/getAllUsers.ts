import { UserRepository } from '../../domain/repositories/user.repository';
import { BaseUseCase } from './BaseUseCase';

export class GetAllUsersUseCase implements BaseUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.getAllUsers();
  }
}
