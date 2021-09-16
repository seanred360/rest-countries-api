import React from "react";
import BackButton from "../common/BackButton";

const NotFound = () => {
  return (
    <section className="page-404 forground-color hover-color">
      <div className="caveman-image">
        <h1 className="text-404">404</h1>
      </div>
      <div className="content-box-404">
        <h3 className="looks-like-you-are-lost">Looks like you're lost</h3>
        <p>the page you are looking for is not available!</p>
        <BackButton />
      </div>
    </section>
  );
};

export default NotFound;
