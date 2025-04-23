import { SVGProps } from "react";
const CaretUpSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M12 11.05 7.05 16l-1.414-1.414L12 8.222l6.364 6.364L16.95 16 12 11.05Z"
      />
    </g>
  </svg>
);
export default CaretUpSVG;
