import React from "react";

import Loader from "react-loader-spinner";

const LoaderComponent = ({ children, Loader, error }) => {
  if (Loader) {
    return (
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <div>{children}</div>;
};

export default LoaderComponent;
