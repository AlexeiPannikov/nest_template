import { Module } from '@nestjs/common';
import { TypeormModule } from './infrastructure/orm/typeorm/typeorm.module';
import { HttpModule } from './infrastructure/http/HttpModule';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config.module';

@Module({
  imports: [EnvironmentConfigModule, TypeormModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
