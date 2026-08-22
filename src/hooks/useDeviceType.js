// @ts-check

import { useState, useEffect } from "react";

import { BREAKPOINT } from "../constants/breakpoints";

/**
 * @typedef {"MOBILE" | "TABLET" | "PC"} DeviceType
 */

/**
 * @typedef {Object} UseDeviceTypeReturn
 * @property {DeviceType} device - 현재 감지된 디바이스 타입
 * @property {boolean} isMobile - 모바일 확인
 * @property {boolean} isTablet - 태블릿 확인
 * @property {boolean} isPc - PC 확인
 */

/**
 * 초기 화면 크기를 기준으로 디바이스 타입을 계산합니다.
 *
 * @returns {DeviceType}
 */
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

/**
 * 현재 화면 크기에 따른 디바이스 타입을 감지하고 반환하는 커스텀 훅입니다.
 * 브라우저 리사이징 이벤트에 맞춰 상태가 자동으로 업데이트됩니다.
 *
 * @returns {UseDeviceTypeReturn} 디바이스 상태 객체
 */
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
