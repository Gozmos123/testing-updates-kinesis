/* KINESIS UI effects
 * Visual-only interaction layer. It does not change page content, image sources,
 * product data, or existing navigation/viewer behavior.
 */
(function () {
  "use strict";

  var focusSelectors = [
    ".product-showcase-card",
    ".product-purpose-card",
    ".department-member",
    ".org-person"
  ];

  var focusTargets = Array.prototype.slice.call(
    document.querySelectorAll(focusSelectors.join(","))
  );
  var isTouchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  var activeTarget = null;

  function setActive(target) {
    if (activeTarget === target) return;
    if (activeTarget) {
      activeTarget.classList.remove("ui-focus-target-active");
    }
    activeTarget = target || null;
    document.body.classList.toggle("ui-focus-mode", Boolean(activeTarget));
    if (activeTarget) {
      activeTarget.classList.add("ui-focus-target-active");
    }
  }

  function clearActive() {
    setActive(null);
  }

  focusTargets.forEach(function (target) {
    target.classList.add("ui-focus-target");

    if (!isTouchLike) {
      target.addEventListener("pointerenter", function () {
        setActive(target);
      });
      target.addEventListener("pointerleave", function () {
        if (activeTarget === target) clearActive();
      });
    }

    target.addEventListener("click", function (event) {
      if (!isTouchLike) return;
      if (event.target.closest("a, button, video, input, textarea, select")) {
        return;
      }
      if (activeTarget === target) {
        clearActive();
      } else {
        setActive(target);
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!isTouchLike || !activeTarget) return;
    if (!event.target.closest(".ui-focus-target")) {
      clearActive();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") clearActive();
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      clearActive();
    }
  });

  /* Add the reusable animated sweep to interactive buttons without changing
   * button labels or click behavior. */
  document.querySelectorAll(
    ".btn, .navcta, .product-picker__button, .viewer-control"
  ).forEach(function (button) {
    button.classList.add("ui-sweep-button");
  });
})();

// Export-free file: it is loaded directly by the HTML pages.
