import { User } from '../model/User';
import { BaseRepository } from './base.repository';

export interface UserRepository<Entity = unknown>
  extends BaseRepository<User, Entity> {
  getAllUsers(): Promise<User[]>;
}
