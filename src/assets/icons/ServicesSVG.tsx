import { SVGProps } from "react";
const ServicesSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <rect
      width={6.923}
      height={6.923}
      x={3}
      y={3}
      fill="currentColor"
      rx={3.462}
    />
    <rect
      width={6.923}
      height={6.923}
      x={14.077}
      y={3}
      fill="currentColor"
      rx={3.462}
    />
    <rect
      width={6.923}
      height={6.923}
      x={3}
      y={14.077}
      fill="currentColor"
      rx={3.462}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.462 17.539a2.077 2.077 0 1 0 4.154 0 2.077 2.077 0 0 0-4.154 0Zm2.077-3.462a3.462 3.462 0 1 0 0 6.923 3.462 3.462 0 0 0 0-6.923Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ServicesSVG;
