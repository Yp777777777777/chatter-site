"use client";
import { useEffect, useState } from "react";

// "ios", "android" or null (desktop / not detected yet)
export default function usePlatform() {
  const [p, setP] = useState(null);
  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/android/i.test(ua)) setP("android");
    else if (/iphone|ipad|ipod/i.test(ua)) setP("ios");
  }, []);
  return p;
}
