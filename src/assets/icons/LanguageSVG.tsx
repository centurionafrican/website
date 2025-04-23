import { SVGProps } from "react";
const LanguageSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="m6.7 10.7 8 8m-9.4 0 8-8 2.7-4m-13.3 0h16m-9.4-4h1.3m18.7 26.6L22.7 16 16 29.3m2.7-5.3h8"
      style={{
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 2.6667,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 5.3333,
      }}
    />
  </svg>
);
export default LanguageSVG;
