import React from "react";
import { Audio } from "react-loader-spinner";

const LoaderComponent = ({ children, Loader, error }) => {
  if (Loader) {
    return (
      <Audio
        height={80}
        width={80}
        radius={9}
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <div>{children}</div>;
};

export default LoaderComponent;
