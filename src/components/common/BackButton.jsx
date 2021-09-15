import React from "react";
import { useHistory } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const BackButton = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    history.push(path);
  };

  return (
    <button className="back-button foreground-color flex flex-ai-c" aria-label="Go Back" onClick={routeChange}>
      <HiArrowNarrowLeft />
      Back
    </button>
  );
};

export default BackButton;
