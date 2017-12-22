import { Schema, model, Model, Document } from 'mongoose';

export let UserModel: Model<Document>;
const schema = new Schema({
    name: String,
    github: String
});

// Try and catch is here, so that Chai HTTP tests don't break
try {
    UserModel = model('User');
} catch(err) {
    UserModel = model('User', schema);;
}