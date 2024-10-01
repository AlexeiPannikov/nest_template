import { BaseUseCase } from '../../application/use-cases/BaseUseCase';

export class UseCaseProxy<UseCase extends BaseUseCase> {
  constructor(private readonly useCase: UseCase) {}
  getInstance() {
    return this.useCase;
  }
}
