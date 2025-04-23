import { SVGProps } from "react";
const CreditedSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#F6D6D5"
        d="M24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12Z"
        opacity={0.5}
      />
      <path
        fill="#A62A26"
        d="M17 12c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1Z"
      />
    </g>
  </svg>
);
export default CreditedSVG;
