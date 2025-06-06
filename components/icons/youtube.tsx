import * as React from "react";
import { IconProps } from "@/data/types/icon-types";

const YoutubeSvgIcon = (props: IconProps) => (
  <svg
    fill="#ffffff"
    width="800px"
    height="800px"
    viewBox="-2 -5 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin"
    className="jam jam-youtube"
    {...props}
  >
    <path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z" />
  </svg>
);
export default YoutubeSvgIcon;
