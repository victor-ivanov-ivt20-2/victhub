import type { FC } from "react";
export interface Colors {
  fillColor?: string;
}
export const SubjectIcon: FC<Colors> = ({ fillColor = "#4F4B5C" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 6.66666L11.6667 5.83333V1.66666L3.33334 1.66666L3.33334 18.3333H16.6667V6.66666L12.5 6.66666ZM16.1785 5L13.3333 2.15482V5L16.1785 5ZM10 7.5H6.66668V5.83333H10V7.5ZM6.66668 10.8333V9.16667H13.3333V10.8333H6.66668ZM6.66668 12.5V14.1667H13.3333V12.5H6.66668Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const ChevronDown: FC<Colors> = ({ fillColor = "#4F4B5C" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 14.8065L4.26343 9.0699L5.73657 7.59676L10 11.8602L14.2634 7.59676L15.7366 9.06989L10 14.8065Z"
        fill={fillColor}
      />
    </svg>
  );
};
