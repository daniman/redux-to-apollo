import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  login: string;
  avatarUrl: string;
  name: string | null;
}

const User = ({ login, avatarUrl, name }: User) => (
  <div>
    <Link to={`/${login}`}>
      <img src={avatarUrl} alt={login} width="72" height="72" />
      <h3>
        {login} {name && <span>({name})</span>}
      </h3>
    </Link>
  </div>
);

export default User;
