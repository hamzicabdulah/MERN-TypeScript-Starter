import * as React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <ul>
                <li role='presentation'><Link to='/'>Home</Link></li>
                <li role='presentation'><Link to='/about'>About</Link></li>
            </ul>
        );
    }
}