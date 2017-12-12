import { Request, Response } from 'express';
import { User } from '../../models/User';

export function addUser(req: Request, res: Response) {
    const newUser = new User(req.body);
    newUser.save((err: Error) => {
        if (err) throw err;
        res.send(newUser);
    });
}