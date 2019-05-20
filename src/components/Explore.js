import React, { useState } from 'react';

const Explore = ({ history, location }) => {
  const [login, setLogin] = useState(location.pathname.substring(1));

  const submit = () => {
    history.push(`/${login}`);
  };

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      submit();
    } else {
      setLogin(e.target.value);
    }
  };

  return (
    <div>
      <p>Type a username or repo full name and hit 'Go':</p>
      <input size="45" defaultValue={login} onKeyUp={onKeyUp} />
      <button onClick={submit}>Go!</button>
    </div>
  );
};

export default Explore;
