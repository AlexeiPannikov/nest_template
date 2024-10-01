import { BaseModel } from './BaseModel';

export class User extends BaseModel<User> {
  id: number;
  name: string;
  email: string;
  password: string;
}
