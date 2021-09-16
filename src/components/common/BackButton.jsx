import React from "react";
import { useHistory } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button
      className="back-button foreground-color hover-color flex flex-ai-c"
      onClick={goBack}
    >
      <HiArrowNarrowLeft />
      Back
    </button>
  );
};

export default BackButton;
