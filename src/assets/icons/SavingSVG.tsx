import { SVGProps } from "react";
const SavingSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 6.6c0 .979-.468 1.85-1.2 2.4H8.2A3 3 0 1 1 13 6.6ZM4 11v9h16v-9H4Zm1.613-2a4.969 4.969 0 0 1-.597-2H4v2h1.613ZM5.26 5H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-3V5h-3.261A5.002 5.002 0 0 0 5.26 5Zm9.723 2a4.97 4.97 0 0 1-.597 2H16V7h-1.016Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 15.5a1.5 1.5 0 0 1 1.5-1.5H20v3h-2.5a1.5 1.5 0 0 1-1.5-1.5Z"
    />
  </svg>
);
export default SavingSVG;
