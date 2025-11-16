// FAQ Accordion
// FAQ Accordion – inicijalizacija nakon učitavanja DOM-a
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".ac-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector("i");
      const isOpen = content.style.display === "block";

      // Zatvori sve ostale
      document.querySelectorAll(".ac-content").forEach((c) => {
        c.style.display = "none";
        c.setAttribute("aria-hidden", "true");
      });
      document.querySelectorAll(".ac-header").forEach((h) => {
        h.classList.remove("active");
        h.setAttribute("aria-expanded", "false");
        const i = h.querySelector("i");
        if (i) { i.classList.remove("fa-minus"); i.classList.add("fa-plus"); }
      });

      // Otvori kliknutu
      if (!isOpen) {
        content.style.display = "block";
        content.setAttribute("aria-hidden", "false");
        btn.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        if (icon) { icon.classList.remove("fa-plus"); icon.classList.add("fa-minus"); }
      }
    });
  });

  // MOBILE NAV – hamburger toggle
  const navContainer = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('nav ul');

  if (navContainer && navToggle && menu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navContainer.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Klik na stavku – zatvori
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Klik van menija – zatvori
    document.addEventListener('click', (e) => {
      if (navContainer.classList.contains('open') && !navContainer.contains(e.target)) {
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // ESC – zatvori
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// Naglašavanje prelaska sekcija pri skrolovanju (IntersectionObserver)
(function observeSections() {
  const sections = document.querySelectorAll(".section, .trust-bar");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in-view");
        else e.target.classList.remove("in-view");
      });
    },
    { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
  );
  sections.forEach((s) => obs.observe(s));
})();

// Parallax fallback za mobilne (osetljive uređaje)
(function disableParallaxOnMobile() {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch) {
    document.querySelectorAll(".cta-final").forEach((el) => {
      el.style.backgroundAttachment = "scroll";
    });
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  var toggleBtns = document.querySelectorAll('.map-card .map-action.toggle');
  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.map-card');
      card.classList.toggle('collapsed');
      var expanded = !card.classList.contains('collapsed');
      btn.setAttribute('aria-expanded', String(expanded));
    });
  });

  // Ako imate stvarnu Google Maps lokaciju, upišite URL u "open" action
  var openLinks = document.querySelectorAll('.map-card .map-action.open');
  openLinks.forEach(function (a) {
    if (!a.getAttribute('href') || a.getAttribute('href') === '#') {
      // Primer: a.href = 'https://maps.google.com/?q=44.7866,20.4489';
    }
  });
});

    document.addEventListener('DOMContentLoaded', () => {
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const accordionContent = header.nextElementSibling;

                // Zatvori sve ostale otvorene
                document.querySelectorAll('.accordion-content.active').forEach(content => {
                    if (content !== accordionContent) {
                        content.classList.remove('active');
                        content.previousElementSibling.classList.remove('active');
                    }
                });

                // Toggle trenutni
                accordionContent.classList.toggle('active');
                header.classList.toggle('active');
            });
        });
    });