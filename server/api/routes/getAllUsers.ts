import { Request, Response } from 'express';
import { User } from '../../classes/User';
import { IUser } from '../../../client/src/components/home/UsersList';

export function getAllUsers(req: Request, res: Response) {
    User.getAllUsers()
        .then((users: IUser[]) => res.send(users))
        .catch((err: Error) => { 
            throw err; 
        });
}