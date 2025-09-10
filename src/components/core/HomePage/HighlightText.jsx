import React from "react";

const HighlightText = ({text}) => {
  return (
<span className="bg-gradient-to-b from-white via-[#22c44c] to-[#006400] text-transparent bg-clip-text font-bold">
{" "}
  {text}
</span>

  );
};

export default HighlightText;
