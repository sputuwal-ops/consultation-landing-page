"use client";

import { useEffect, useRef } from "react";

const successRedirectDelay = 3500;
const flodeskFormId = "6a7ab63cbf97bc60cfae6827";
const flodeskRootSelector = ".ff-6a7ab63cbf97bc60cfae6827";
const flodeskAssetsHost = "https://assets.flodesk.com";
const flodeskUniversalPath = "/universal";

declare global {
  interface Window {
    fd?: {
      (eventName: string, options: { formId: string; rootEl: string }): void;
      q?: Array<[string, { formId: string; rootEl: string }]>;
    };
    FlodeskObject?: string;
  }
}

function loadFlodeskUniversalScript() {
  if (typeof window.fd === "function") {
    return;
  }

  window.FlodeskObject = "fd";
  window.fd = function flodeskQueue(eventName, options) {
    (window.fd!.q = window.fd!.q || []).push([eventName, options]);
  };

  const firstScript = document.getElementsByTagName("script")[0];
  const version = `?v=${Math.floor(new Date().getTime() / (120 * 1000)) * 60}`;
  const moduleScript = document.createElement("script");
  moduleScript.async = true;
  moduleScript.type = "module";
  moduleScript.src = `${flodeskAssetsHost}${flodeskUniversalPath}.mjs${version}`;
  firstScript.parentNode?.insertBefore(moduleScript, firstScript);

  const legacyScript = document.createElement("script");
  legacyScript.async = true;
  legacyScript.noModule = true;
  legacyScript.src = `${flodeskAssetsHost}${flodeskUniversalPath}.js${version}`;
  firstScript.parentNode?.insertBefore(legacyScript, firstScript);
}

export function FlodeskInlineForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    let observer: MutationObserver | undefined;
    let redirectTimer: number | undefined;

    function scheduleRedirect() {
      if (redirectTimer) {
        return;
      }

      redirectTimer = window.setTimeout(() => {
        window.location.assign("/thanks");
      }, successRedirectDelay);
    }

    function startSuccessObserver(root: Element) {
      const hasSucceeded = () => {
        return root.getAttribute("data-ff-stage") === "success";
      };

      if (hasSucceeded()) {
        scheduleRedirect();
        return;
      }

      observer = new MutationObserver(() => {
        if (hasSucceeded()) {
          scheduleRedirect();
        }
      });

      observer.observe(root, {
        attributes: true,
        attributeFilter: ["class", "data-ff-stage"],
        childList: true,
        subtree: true
      });
    }

    function initializeFlodesk() {
      if (typeof window.fd !== "function") {
        return false;
      }

      window.fd("form:handle", {
        formId: flodeskFormId,
        rootEl: flodeskRootSelector
      });

      return true;
    }

    async function mountFlodeskEmbed() {
      const response = await fetch("/flodesk-embed.html", { cache: "force-cache" });
      const html = await response.text();

      if (!isMounted || !containerRef.current) {
        return;
      }

      containerRef.current.innerHTML = html;

      containerRef.current.querySelectorAll("script").forEach((script) => script.remove());

      const root = containerRef.current.querySelector('[data-ff-el="root"]');
      if (root) {
        startSuccessObserver(root);
      }

      loadFlodeskUniversalScript();
      initializeFlodesk();
    }

    mountFlodeskEmbed();

    return () => {
      isMounted = false;
      observer?.disconnect();
      if (redirectTimer) {
        window.clearTimeout(redirectTimer);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flodesk-booking-card rounded-card border border-line bg-white p-4 shadow-form sm:p-7"
    />
  );
}
