import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentConfig } from '../../domain/config/environment.config';

@Injectable()
export class EnvironmentConfigService implements EnvironmentConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('POSTGRES_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('POSTGRES_PORT');
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('POSTGRES_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('POSTGRES_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('POSTGRES_DB');
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('POSTGRES_SCHEMA');
  }

  getDatabaseSync(): boolean {
    return this.configService.get<boolean>('POSTGRES_SYNCHRONIZE');
  }
}
