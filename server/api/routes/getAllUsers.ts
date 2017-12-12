import { Request, Response } from 'express';
import { User } from '../../models/User';

export function getAllUsers(req: Request, res: Response) {
    User.find({}, (err: Error, users: Document[]) => {
        if (err) throw err;
        res.send(users);
    });
}