const SvgActive = () => (
  <svg width={66} height={66} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className="svg-bubble"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.629 25.496a.868.868 0 1 0 0-1.735.868.868 0 0 0 0 1.735Zm0 1.761a2.629 2.629 0 1 0 0-5.257 2.629 2.629 0 0 0 0 5.257Z"
      fill="url(#active_svg__a)"
    />
    <path
      className="svg-bubble"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.629 54.496a.868.868 0 1 0 0-1.735.868.868 0 0 0 0 1.735Zm0 1.761a2.629 2.629 0 1 0 0-5.257 2.629 2.629 0 0 0 0 5.257Z"
      fill="url(#active_svg__b)"
    />
    <path
      className="svg-bubble"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M54.943 53.125a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Zm0 1.761a3.943 3.943 0 1 0 0-7.886 3.943 3.943 0 0 0 0 7.886Z"
      fill="url(#active_svg__c)"
    />
    <path
      className="svg-bubble"
      fillRule="evenodd"
      clipRule="evenodd"
      d="m57.035 12.033-1.274.736v1.472l1.274.735 1.275-.735v-1.472l-1.275-.736Zm3.036-.28L57.035 10 54 11.752v3.505l3.035 1.753 3.036-1.753v-3.505Z"
      fill="url(#active_svg__d)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m5 38.61-1.68.945v1.89l1.68.944 1.68-.944v-1.89L5 38.611Zm4-.36L5 36l-4 2.25v4.5L5 45l4-2.25v-4.5Z"
      fill="url(#active_svg__e)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.358 6.664v-2.19l1.897-1.096 1.897 1.095v2.19L27.255 7.76l-1.897-1.095Z"
      fill="url(#active_svg__f)"
    />
    <g filter="url(#active_svg__g)">
      <circle cx={33} cy={31} r={21} fill="url(#active_svg__h)" />
    </g>
    <defs>
      <linearGradient
        id="active_svg__a"
        x1={7.629}
        y1={22}
        x2={7.629}
        y2={27.257}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="active_svg__b"
        x1={17.629}
        y1={51}
        x2={17.629}
        y2={56.257}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="active_svg__c"
        x1={54.943}
        y1={47}
        x2={54.943}
        y2={54.886}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="active_svg__d"
        x1={57.035}
        y1={10}
        x2={57.035}
        y2={17.01}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="active_svg__e"
        x1={5}
        y1={36}
        x2={5}
        y2={45}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="active_svg__f"
        x1={27.255}
        y1={3.378}
        x2={27.255}
        y2={7.759}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="active_svg__h"
        x1={33}
        y1={10}
        x2={33}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <filter
        id="active_svg__g"
        x={0}
        y={0}
        width={66}
        height={66}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={6} />
        <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.448157 0 0 0 0 0.803922 0 0 0 0.8 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4454_823"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4454_823"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgActive;
