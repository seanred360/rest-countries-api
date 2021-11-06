import { useHistory } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const HomeButton = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    history.push(path);
  };

  return (
    <button
      className="home-button foreground-color hover-color flex flex-ai-c"
      onClick={routeChange}
    >
      <AiFillHome />
      Home
    </button>
  );
};

export default HomeButton;
