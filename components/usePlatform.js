"use client";

import { useEffect, useState } from "react";

export default function usePlatform() {
  const [platform, setPlatform] = useState("unknown");

  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) setPlatform("ios");
    else if (/Android/i.test(ua)) setPlatform("android");
    else setPlatform("other");
  }, []);

  return platform;
}
