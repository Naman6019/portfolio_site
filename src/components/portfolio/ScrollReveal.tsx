"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const THROTTLE_MS = 100;

/**
 * Reveals `[data-reveal]` elements as they scroll into view.
 *
 * Elements are visible by default in the CSS -- that is what renders before
 * this component mounts, and what stays true forever if it never does (no
 * JS, hydration failure, anything). On mount, this component itself decides
 * which elements are off-screen and hides only those, in the same
 * synchronous pass that marks them as managed. There is no separate script
 * that hides content ahead of this one running, so there is nothing for this
 * component to race against and no window where content can be hidden
 * without this component also being the thing that will reveal it again.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const all = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (all.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // A zero-height viewport (some embedded/headless contexts) would put every
    // element permanently "below the fold". Leave everything visible instead.
    const skip = reducedMotion || !window.innerHeight;

    if (skip) {
      all.forEach((el) => el.classList.add("js-reveal-managed"));
      return;
    }

    const limit = () => window.innerHeight * 0.92;

    let pending = all.filter((el) => {
      el.classList.add("js-reveal-managed");
      const offscreen = el.getBoundingClientRect().top >= limit();
      if (offscreen) el.classList.add("js-reveal-hidden");
      return offscreen;
    });

    if (pending.length === 0) return;

    let last = 0;
    let timer: number | undefined;

    const check = () => {
      last = Date.now();
      const edge = limit();
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= edge) return true;
        el.classList.remove("js-reveal-hidden");
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

    return teardown;
  }, [pathname]);

  return null;
}
