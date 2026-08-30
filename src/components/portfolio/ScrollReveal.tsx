"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const THROTTLE_MS = 100;

/**
 * Reveals `[data-reveal]` elements as they scroll into view.
 *
 * Uses a throttled scroll/resize check rather than IntersectionObserver. The
 * failure mode matters more than the elegance here: if the reveal mechanism
 * never runs, the page's main content stays invisible. A geometry check driven
 * by scroll events degrades safely, and the first check runs synchronously on
 * mount so anything already in view is shown immediately.
 *
 * The hidden starting state is scoped to `html[data-reveal-ready]`, set by the
 * inline script in the root layout, so content is never hidden without scripts.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Confirms to the layout's inline script that reveal logic is running, so
    // it does not withdraw the hidden state as a hydration-failure fallback.
    document.documentElement.setAttribute("data-reveal-active", "");

    let pending = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)"),
    );
    if (pending.length === 0) return;

    const revealAll = () => {
      pending.forEach((el) => el.classList.add("is-revealed"));
      pending = [];
    };

    // A zero-height viewport (some embedded/headless contexts) would put every
    // element permanently "below the fold". Show everything rather than hide it.
    if (
      !window.innerHeight ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    let last = 0;
    let timer: number | undefined;

    const check = () => {
      last = Date.now();
      const limit = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= limit) return true;
        el.classList.add("is-revealed");
        return false;
      });
      if (pending.length === 0) teardown();
    };

    const onScroll = () => {
      const since = Date.now() - last;
      if (since >= THROTTLE_MS) {
        check();
        return;
      }
      if (timer === undefined) {
        timer = window.setTimeout(() => {
          timer = undefined;
          check();
        }, THROTTLE_MS - since);
      }
    };

    function teardown() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();

    return teardown;
  }, [pathname]);

  return null;
}
