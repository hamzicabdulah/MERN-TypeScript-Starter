import { addUser } from './routes/addUser';
import { getAllUsers } from './routes/getAllUsers';

export function api(app) {
    app.post('/api/addUser', addUser);
    app.get('/api/getAllUsers', getAllUsers);
}