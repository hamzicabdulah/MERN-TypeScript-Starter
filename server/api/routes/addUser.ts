import { Request, Response } from 'express';
import { User } from '../../classes/User';
import { IUser } from '../../../client/src/components/home/UsersList';

export function addUser(req: Request, res: Response) {
    const user = new User(req.body);
    user.addToDB()
        .then((user: IUser) => res.send(user))
        .catch((err: Error) => {
            throw err;
        });
}