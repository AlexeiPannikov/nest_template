import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UseCaseProxyModule } from '../usecase-proxy/usecase-proxy.module';

@Module({
  imports: [UseCaseProxyModule.register()],
  controllers: [UserController],
})
export class HttpModule {}
