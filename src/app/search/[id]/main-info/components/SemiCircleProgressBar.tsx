"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

function SemiCircleProgressBar() {
  const value = 30;
  const [percentage, setPercentage] = useState(value);
  const progressBarRef = useRef(null);

  useEffect(() => {
    setPercentage(value);
  }, [value]);

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
      // style={{ "--value": `${percentage}` }}
      ref={progressBarRef}
      // @ts-ignore
      after={"99%"}
      className="after:content-[attr(after)] after:text-4xl after:font-semibold w-[250px]"
    ></div>
  );
}

export default SemiCircleProgressBar;
