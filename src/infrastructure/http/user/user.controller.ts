import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllUsersUseCase } from '../../../application/use-cases/getAllUsers';
import { UseCaseProxyModule } from '../../usecase-proxy/usecase-proxy.module';
import { UseCaseProxy } from '../../usecase-proxy/usecase-proxy';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UseCaseProxyModule.GET_ALL_USERS_USE_CASE)
    private readonly getAllUsersUseCase: UseCaseProxy<GetAllUsersUseCase>,
  ) {}

  @Get('')
  async getAllUsers() {
    return await this.getAllUsersUseCase.getInstance().execute();
  }
}
