import { useState, useEffect } from "react";

/**
 * 모바일 체크 hook
 * @param {number} breakpoint - 모바일로 간주할 최대 픽셀 값 (기본값: 744)
 * @returns {boolean} - 모바일이면(breakpoint 미만) true
 */
const useIsMobile = (breakpoint = 744) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handleResize = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
