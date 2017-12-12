import { Schema, model, Model, Document } from 'mongoose';

export let User: Model<Document>;
const schema = new Schema({
    name: String,
    github: String
});

try {
    User = model('User');
} catch(err) {
    User = model('User', schema);;
}