import { UserModel } from '../models/User';

export class User {
    name: string;
    github: string;

    constructor({ name, github }) {
        this.name = name;
        this.github = github;
    }

    static getAllUsers() {
        return new Promise((resolve, reject) => {
            UserModel.find({}, (err: Error, users: Document[]) => {
                if (err) return reject(err);
                resolve(users);
            });
        });
    }

    addToDB() {
        return new Promise((resolve, reject) => {
            const { name, github } = this;
            const newUser = new UserModel({ name, github });
            newUser.save((err: Error) => {
                if (err) return reject(err);
                resolve(newUser);
            });
        });
    }
}