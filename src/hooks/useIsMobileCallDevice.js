import { useEffect, useState } from "react";

export function useIsMobileCallDevice() {
  const [isMobileCallDevice, setIsMobileCallDevice] = useState(false);

  useEffect(() => {
    // navigator không có trên server => check trước
    if (typeof navigator === "undefined") return;

    const ua = navigator.userAgent || navigator.vendor || window.opera || "";

    // Các pattern phổ biến cho điện thoại có gọi / sms
    const regex = /android|iphone|ipod|ipad|windows phone|mobile/i;

    const looksMobile = regex.test(ua);

    // Heuristic nhẹ:
    // - Android phone, iPhone, Windows Phone => true
    // - iPad có thể không gọi được bằng sim vật lý tùy model, 
    //   nhưng nhiều team vẫn coi là "thiết bị cầm tay". Bạn có thể tùy biến.
    setIsMobileCallDevice(looksMobile);
  }, []);

  return isMobileCallDevice;
}
