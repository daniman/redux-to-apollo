import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

const Explore = ({ history, location }: RouteComponentProps) => {
  const [login, setLogin] = useState(location.pathname.substring(1));

  const submit = () => {
    history.push(`/${login}`);
  };

  const onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      submit();
    } else {
      setLogin(e.target.value);
    }
  };

  return (
    <input
      size={45}
      defaultValue={login}
      onKeyUp={onKeyUp}
      placeholder="username"
      style={{
        fontSize: 14,
        outline: "none",
        border: "none",
        borderBottom: "1px solid #eee",
        width: "100%",
      }}
    />
  );
};

export default Explore;
