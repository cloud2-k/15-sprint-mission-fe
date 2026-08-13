import { useState, useEffect } from "react";
import { BREAKPOINT } from "../constants/breakpoints";

const getInitialDevice = () => {
  if (typeof window === "undefined") return "PC";
  if (window.matchMedia(`(max-width: ${BREAKPOINT.TABLET - 1}px)`).matches)
    return "MOBILE";
  if (
    window.matchMedia(
      `(min-width: ${BREAKPOINT.TABLET}px) and (max-width: ${BREAKPOINT.PC - 1}px)`,
    ).matches
  )
    return "TABLET";
  return "PC";
};

const useDeviceType = () => {
  const [device, setDevice] = useState(getInitialDevice);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mobileQuery = window.matchMedia(
      `(max-width: ${BREAKPOINT.TABLET - 1}px)`,
    );
    const tabletQuery = window.matchMedia(
      `(min-width: ${BREAKPOINT.TABLET}px) and (max-width: ${BREAKPOINT.PC - 1}px)`,
    );

    const handleDeviceChange = () => {
      if (mobileQuery.matches) setDevice("MOBILE");
      else if (tabletQuery.matches) setDevice("TABLET");
      else setDevice("PC");
    };

    mobileQuery.addEventListener("change", handleDeviceChange);
    tabletQuery.addEventListener("change", handleDeviceChange);

    return () => {
      mobileQuery.removeEventListener("change", handleDeviceChange);
      tabletQuery.removeEventListener("change", handleDeviceChange);
    };
  }, []);

  return {
    device,
    isMobile: device === "MOBILE",
    isTablet: device === "TABLET",
    isPc: device === "PC",
  };
};

export default useDeviceType;
