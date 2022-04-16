
const SvgMoodHappy = () => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M12.75.75a10.485 10.485 0 0 0-8.917 16.025L.75 23.25l6.475-3.083A10.5 10.5 0 1 0 12.75.75Z"
      stroke="url(#mood-happy_svg__a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M15.75 13.5a3 3 0 1 1-6 0h6Z"
      stroke="url(#mood-happy_svg__b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.25 9.375a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75"
      stroke="url(#mood-happy_svg__c)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.25 9.375a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75"
      stroke="url(#mood-happy_svg__d)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="mood-happy_svg__a"
        x1={12.01}
        y1={0.75}
        x2={12.01}
        y2={23.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="mood-happy_svg__b"
        x1={12.75}
        y1={13.5}
        x2={12.75}
        y2={16.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="mood-happy_svg__c"
        x1={8.375}
        y1={9.375}
        x2={8.375}
        y2={10.375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
      <linearGradient
        id="mood-happy_svg__d"
        x1={17.375}
        y1={9.375}
        x2={17.375}
        y2={10.375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20F" />
        <stop offset={1} stopColor="#9E00FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMoodHappy;
