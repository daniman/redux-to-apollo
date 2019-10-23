import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  login: string;
  avatarUrl: string;
  name: string | null;
  costume?: 'dragon' | 'unicorn';
}

const User = ({ login, avatarUrl, name, costume }: User) => (
  <div>
    {costume === 'dragon' ? (
      <div>
        <span role="img" aria-label="crown" style={{ fontSize: 50 }}>
          🐉
        </span>
      </div>
    ) : null}
    {costume === 'unicorn' ? (
      <div>
        <span role="img" aria-label="crown" style={{ fontSize: 50 }}>
          🦄
        </span>
      </div>
    ) : null}
    <Link to={`/${login}`}>
      <img src={avatarUrl} alt={login} width="72" height="72" />
      <h3>
        {login} {name && <span>({name})</span>}
      </h3>
    </Link>
  </div>
);

export default User;
