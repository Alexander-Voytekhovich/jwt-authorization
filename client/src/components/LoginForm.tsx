import React, { FunctionComponent, useState, useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const LoginForm: FunctionComponent = () => {
  const { store } = useContext(Context);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.registration(email, password)}>Registration</button>
    </div>
  );
};

export default observer(LoginForm);
