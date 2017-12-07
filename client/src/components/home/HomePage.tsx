import * as React from 'react';
import axios from 'axios';
import { HomeForm } from './HomeForm';
import { IUser, UsersList } from './UsersList';

interface IHomePageState {
  user: IUser;
  users: IUser[];
  loading: boolean;
}

export class HomePage extends React.Component<{}, IHomePageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: {
        github: '',
        name: ''
      },
      users: [],
      loading: true
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('/api/getAllUsers')
      .then((response) => {
        const users = response.data;
        this.setState({
          users,
          loading: false
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  onInputChange(event: any) {
    const property = event.target.name;
    const value = event.target.value;
    const user: IUser = {
      ...this.state.user,
      [property]: value
    };
    this.setState({ user });
  }

  onFormSubmit(event: any) {
    this.setState({ loading: true });
    axios.post('/api/addUser', this.state.user)
      .then((response) => {
        const user = response.data;
        const users: IUser[] = [...this.state.users, user];
        this.setState({
          users,
          loading: false
        });
      })
      .catch((error) => {
        alert(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <HomeForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} loading={this.state.loading} />
        {this.state.users.length > 0 && <UsersList users={this.state.users} />}
        {this.state.loading && <p>Loading</p>}
      </div>
    );
  }
}