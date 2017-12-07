import { Schema, model } from 'mongoose';

export const User = model('User', new Schema({
    name: String,
    github: String
}));
