import React from 'react';
import { Link } from 'react-router-dom';

interface OwnerType {
  login: string;
}

interface Repo {
  name: string;
  description: string | null;
  owner: OwnerType;
}

const Repo = ({ name, description, owner }: Repo) => {
  const { login } = owner;

  return (
    <div className="Repo">
      <h3>
        <Link to={`/${login}/${name}`}>{name}</Link>
        {' by '}
        <Link to={`/${login}`}>{login}</Link>
      </h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Repo;
