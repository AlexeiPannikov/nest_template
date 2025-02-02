import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
