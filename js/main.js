(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Remove preload guard once everything is ready (re-enables CSS transitions)
  window.addEventListener("load", function () {
    document.body.classList.remove("preload");
  });

  // ---------------- Mobile nav ----------------
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // ---------------- Nav background on scroll ----------------
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.style.boxShadow = window.scrollY > 8 ? "0 8px 30px -20px rgba(0,0,0,.6)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------------- Rotating hero role word ----------------
  var rotateEl = document.getElementById("rotateWord");
  if (rotateEl && !prefersReducedMotion) {
    var words = ["Full-Stack Engineer", "Cloud Architect", "AI Systems Integrator", "Team Lead"];
    var idx = 0;

    setInterval(function () {
      idx = (idx + 1) % words.length;
      rotateEl.style.opacity = "0";
      rotateEl.style.transform = "translateY(6px)";
      setTimeout(function () {
        rotateEl.textContent = words[idx];
        rotateEl.style.transition = "opacity .35s ease, transform .35s ease";
        rotateEl.style.opacity = "1";
        rotateEl.style.transform = "translateY(0)";
      }, 260);
    }, 2600);
  }

  // ---------------- Scroll reveal (IntersectionObserver, fail-safe) ----------------
  // Content is opacity:1 in CSS by default. We only ever *add* hiding classes
  // here, and every path below is guarded so a slow/broken observer can never
  // leave real content permanently invisible.
  (function setupReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    items.forEach(function (el) { el.classList.add("reveal-pre"); });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });

    // Safety net: guarantee everything is visible shortly after load even if
    // an element's trigger geometry never intersects (e.g. very short viewport).
    window.addEventListener("load", function () {
      setTimeout(function () {
        items.forEach(function (el) { el.classList.add("reveal-in"); });
      }, 1800);
    });
  })();

  // ---------------- Project screenshot lightbox ----------------
  (function setupLightbox() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
    var lightbox = document.getElementById("lightbox");
    if (!triggers.length || !lightbox) return;

    var imgEl = document.getElementById("lightboxImg");
    var captionEl = document.getElementById("lightboxCaption");
    var closeBtn = document.getElementById("lightboxClose");
    var prevBtn = document.getElementById("lightboxPrev");
    var nextBtn = document.getElementById("lightboxNext");

    var images = [];
    var caption = "";
    var index = 0;
    var lastFocused = null;

    function render() {
      imgEl.src = images[index];
      imgEl.alt = caption + " — screenshot " + (index + 1) + " of " + images.length;
      captionEl.textContent = caption + " (" + (index + 1) + "/" + images.length + ")";
      var multi = images.length > 1;
      prevBtn.hidden = !multi;
      nextBtn.hidden = !multi;
    }

    function open(trigger) {
      images = trigger.getAttribute("data-lightbox").split(",").map(function (s) { return s.trim(); });
      caption = trigger.getAttribute("data-caption") || "";
      index = 0;
      lastFocused = trigger;
      render();
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function close() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    function step(delta) {
      index = (index + delta + images.length) % images.length;
      render();
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () { open(trigger); });
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () { step(-1); });
    nextBtn.addEventListener("click", function () { step(1); });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  })();

  // ---------------- Contact form: inline pending state (formsubmit.co posts, then redirects) ----------------
  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      var btn = contactForm.querySelector("button[type=submit]");
      if (btn) {
        btn.textContent = "Sending…";
        btn.disabled = true;
      }
    });
  }
})();
