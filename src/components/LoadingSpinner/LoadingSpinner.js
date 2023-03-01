import React from "react";
export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-primary"
        style={{
          width: "3rem",
          height: "3rem",
          backgroundColor: "transparent",

        }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
