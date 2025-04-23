import { SVGProps } from "react";
const RefreshSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M3 12a9 9 0 0 1 16-5.658" />
      <path d="M19.5 3v4h-4m5.5 5a9 9 0 0 1-16 5.657" />
      <path d="M4.5 21v-4h4" />
    </g>
  </svg>
);
export default RefreshSVG;
