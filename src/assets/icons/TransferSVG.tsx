import { SVGProps } from "react";
const TransferSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M4 5v14h16V5H4ZM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9 6V6l5 5H8V9h4Zm-5 4h9v2h-4v3l-5-5Z"
      />
    </g>
  </svg>
);
export default TransferSVG;
