import { SVGProps } from "react";

export const MoneyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#E0A329"
    {...props}
  >
    <path
      d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6z"
      stroke="#E0A329"
    />
    <path
      d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191 0 3 5.5 1.5 5.5 4.5 0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"
      stroke="#E0A329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
