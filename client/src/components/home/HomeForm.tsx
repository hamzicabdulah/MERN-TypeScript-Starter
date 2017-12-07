import * as React from 'react';
import { formStyle, labelStyle, inputContStyle } from '../../styles/homeForm';

interface IHomeFormProps {
    onInputChange: (event: any) => void;
    onFormSubmit: (event: any) => void;
    loading: boolean;
}

export const HomeForm = ({ onInputChange, onFormSubmit, loading }: IHomeFormProps) => {
    return (
        <form onSubmit={onFormSubmit} style={formStyle}>
            <div className='inputContainer' style={inputContStyle}>
                <label style={labelStyle}>Name</label>
                <input type='text' name='name' placeholder='John Doe' onChange={onInputChange} />
            </div>
            <div className='inputContainer' style={inputContStyle}>
                <label style={labelStyle}>GitHub Username</label>
                <input type='text' name='github' placeholder='johndoe' onChange={onInputChange} />
            </div>
            <input type='submit' value='Add Me' disabled={loading} />
        </form>
    );
}