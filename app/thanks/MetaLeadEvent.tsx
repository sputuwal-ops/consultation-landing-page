"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __digitalSarozLeadTracked?: boolean;
    fbq?: (eventType: "track", eventName: "Lead") => void;
  }
}

export function MetaLeadEvent() {
  useEffect(() => {
    if (window.__digitalSarozLeadTracked) {
      return;
    }

    window.__digitalSarozLeadTracked = true;

    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return null;
}
