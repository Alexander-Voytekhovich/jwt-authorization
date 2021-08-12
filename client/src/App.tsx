import React, { useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '.';
import { IUser } from './interfaces/IUser';
import UserService from './service/UserService';
import LoginForm from './components/LoginForm';

function App() {
  const { store } = useContext(Context);

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if(store.isLoading) {
    return <h2>Loading ...</h2>;
  }

  if(!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <div className="App">
      <h2>{ store.isAuth ? `User ${store.user.email} is logged in` : 'User is not authorized' }</h2>
      {store.user.isAdmin && <button onClick={() => getUsers()}>Get users</button>}
      <button onClick={() => store.logout()}>Logout</button>
      {users.map(user => <div key={user.email}>{user.email}</div>)}
    </div>
  );
}

export default observer(App);
