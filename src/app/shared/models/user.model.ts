import { Post } from './post.model';
import { BaseModel } from './base.model';

export class User extends BaseModel{
    username: string;
    name: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
    posts: Post[]
}