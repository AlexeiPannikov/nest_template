import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config.module';
import { RepositoryModule } from '../orm/typeorm/repositories/repository.module';
import { UserRepositoryImplemented } from '../orm/typeorm/repositories/user.repository';
import { UseCaseProxy } from './usecase-proxy';
import { GetAllUsersUseCase } from '../../application/use-cases/getAllUsers';

@Module({
  imports: [EnvironmentConfigModule, RepositoryModule],
})
export class UseCaseProxyModule {
  static GET_ALL_USERS_USE_CASE = 'getAllUsersUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UseCaseProxyModule,
      providers: [
        {
          inject: [UserRepositoryImplemented],
          provide: UseCaseProxyModule.GET_ALL_USERS_USE_CASE,
          useFactory: (userRepository: UserRepositoryImplemented) =>
            new UseCaseProxy(new GetAllUsersUseCase(userRepository)),
        },
      ],
      exports: [UseCaseProxyModule.GET_ALL_USERS_USE_CASE],
    };
  }
}
