import { BaseModel } from './base.model';
import { User } from './user.model';

export class Post extends BaseModel {
    title: string;
    body: string;
    user: User;
}