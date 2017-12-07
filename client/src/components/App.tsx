import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { Header } from './header/Header';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}