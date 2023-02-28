import * as React from "react";

const CloseButton = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.574 1.574 7.149 6.001l4.425 4.425-1.148 1.148L6 7.148l-4.426 4.426-1.148-1.148L4.851 6 .426 1.574 1.574.426 6 4.852 10.426.426l1.148 1.148Z"
      fill="#fff"
    />
  </svg>
);

export default CloseButton;
