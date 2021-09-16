import React from "react";
import { useHistory } from "react-router-dom";

const LogoHomeButton = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    history.push(path);
  };

  return (
    <button
      className="logo-home-button foreground-color hover-color flex flex-ai-c"
      onClick={routeChange}
    >
      Where in the world?
    </button>
  );
};

export default LogoHomeButton;
