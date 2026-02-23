import * as React from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg
      width="20px"
      height="20px"
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon fill-foreground"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.61 32 32 90.61 32 162.67v186.66C32 421.39 90.61 480 162.67 480h186.66C421.39 480 480 421.39 480 349.33V162.67C480 90.61 421.39 32 349.33 32z" />
      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28z" />
      <path d="M256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33M256 144a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
  );
}

export default InstagramIcon;
