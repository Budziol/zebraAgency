import React from "react";
import { BackgroundSVG } from "./BackgroundSVG";

function Square1({ top, left, bottom, right, animate, transition }) {
  return (
    <BackgroundSVG
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animate={animate}
      transition={transition}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10C1.34315 10 0 8.65685 0 7V3C0 1.34315 1.34315 0 3 0H7C8.65685 0 10 1.34315 10 3V7C10 8.65685 8.65685 10 7 10H3Z"
        fill="#282A5B"
      />
    </BackgroundSVG>
  );
}

function Square2({ top, left, bottom, right, animate, transition }) {
  return (
    <BackgroundSVG
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animate={animate}
      transition={transition}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.67074 19.4279C8.23586 20.2564 6.40109 19.7647 5.57266 18.3299L0.572663 9.6696C-0.255764 8.23472 0.235861 6.39995 1.67074 5.57152L10.331 0.571525C11.7659 -0.256902 13.6006 0.234724 14.4291 1.6696L19.4291 10.3299C20.2575 11.7647 19.7659 13.5995 18.331 14.4279L9.67074 19.4279Z"
        fill="#FF761B"
      />
    </BackgroundSVG>
  );
}

function Square3({ top, left, bottom, right, animate, transition }) {
  return (
    <BackgroundSVG
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animate={animate}
      transition={transition}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66985 14.4282C0.234968 13.5997 -0.256657 11.765 0.57177 10.3301L5.57177 1.66983C6.4002 0.234948 8.23497 -0.256677 9.66985 0.57175L18.3301 5.57175C19.765 6.40018 20.2566 8.23495 19.4282 9.66983L14.4282 18.3301C13.5997 19.765 11.765 20.2566 10.3301 19.4282L1.66985 14.4282Z"
        fill="#588FFF"
      />
    </BackgroundSVG>
  );
}

function Square4({ top, left, bottom, right, animate, transition }) {
  return (
    <BackgroundSVG
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animate={animate}
      transition={transition}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4333 16.8999C16.0045 18.5003 14.3595 19.4501 12.7591 19.0212L3.09984 16.4331C1.49944 16.0042 0.549693 14.3592 0.978518 12.7588L3.56671 3.09956C3.99553 1.49917 5.64055 0.549419 7.24094 0.978245L16.9002 3.56643C18.5006 3.99526 19.4503 5.64027 19.0215 7.24067L16.4333 16.8999Z"
        fill="#825EEE"
      />
    </BackgroundSVG>
  );
}

function Square5({ top, left, bottom, right, animate, transition }) {
  return (
    <BackgroundSVG
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      animate={animate}
      transition={transition}
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.28477 20.8989C0.176115 19.6676 0.275528 17.7708 1.50681 16.6621L18.3918 1.45879C19.6231 0.350142 21.52 0.449556 22.6286 1.68084L37.8319 18.5658C38.9406 19.7971 38.8412 21.694 37.6099 22.8026L20.7249 38.0059C19.4936 39.1146 17.5967 39.0152 16.4881 37.7839L1.28477 20.8989Z"
        fill="#B8FBFD"
      />
    </BackgroundSVG>
  );
}

export { Square1, Square2, Square3, Square4, Square5 };
