import * as React from 'react';
import { FormEvent, StatelessComponent } from 'react';
import { formStyle, labelStyle, inputContStyle } from '../../styles/homeForm';
import { IUser } from './UsersList';

interface IHomeFormProps {
    onInputChange: (event: FormEvent<HTMLInputElement>) => void;
    onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    user: IUser;
}

export const HomeForm: StatelessComponent<IHomeFormProps> = ({ onInputChange, onFormSubmit, loading, user }) => {
    return (
        <form onSubmit={onFormSubmit} style={formStyle}>
            <div className='inputContainer' style={inputContStyle}>
                <label style={labelStyle}>Name</label>
                <input type='text' name='name' placeholder='John Doe' value={user.name} onChange={onInputChange} />
            </div>
            <div className='inputContainer' style={inputContStyle}>
                <label style={labelStyle}>GitHub Username</label>
                <input type='text' name='github' placeholder='johndoe' value={user.github} onChange={onInputChange} />
            </div>
            <input type='submit' value='Add Me' disabled={loading} />
        </form>
    );
}