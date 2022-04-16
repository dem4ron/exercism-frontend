import React, { Attributes, HTMLProps, ReactNode, ReactPropTypes } from "react";

interface Props{
   children: ReactNode, 
}
export default function FlexRowAlign({children, ...props}:Props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center", height:"100%" }}
      {...props}
    >
      {children}
    </div>
  );
}
