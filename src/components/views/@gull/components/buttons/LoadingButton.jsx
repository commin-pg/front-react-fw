import React from "react";
import { Spin, Button } from "antd";

const LoadingButton = ({
  variant = "primary",
  loading = false,
  animation,
  spinnerSize,
  buttonSize,
  children,
  className,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      className={`d-flex flex-row align-items-center ${className}`}
      size={buttonSize}
      onClick={onClick}
    >
      {children}

      {loading && (
        <Spin
          className="mr-2"
          spinning={loading}
          size={spinnerSize}
          style={{ marginLeft: "0.4rem" }}
        />
      )}
    </Button>
  );
};

export default LoadingButton;
