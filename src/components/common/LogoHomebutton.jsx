import { useHistory } from "react-router-dom";

const LogoHomeButton = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    // if the user is on the homepage already, reload the page
    if (history.location.pathname === path) window.location.reload(false);
    else history.push(path);
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
