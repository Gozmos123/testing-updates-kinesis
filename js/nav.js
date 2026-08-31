document.addEventListener("DOMContentLoaded", function () {

  const burger = document.getElementById("burgerBtn");
  const navLinks = document.querySelector(".navlinks");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!burger || !navLinks) {
    return;
  }


  /* ==============================
     OPEN / CLOSE MOBILE MENU
  ============================== */

  function toggleMenu() {

    navLinks.classList.toggle("mobile-open");

    const isOpen =
      navLinks.classList.contains("mobile-open");

    burger.textContent = isOpen ? "✕" : "☰";

    burger.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  }


  /* Normal click */
  burger.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    toggleMenu();

  });


  /* ==============================
     ABOUT US DROPDOWN
  ============================== */

  if (dropdownToggle && dropdownMenu) {

    dropdownToggle.addEventListener("click", function (event) {

      if (window.innerWidth <= 860) {

        event.preventDefault();
        event.stopPropagation();

        dropdownMenu.classList.toggle(
          "mobile-dropdown-open"
        );

      }

    });

  }


  /* ==============================
     CLOSE AFTER CLICKING A LINK
  ============================== */

  document.querySelectorAll(
    ".navlinks > a, .dropdown-menu a"
  ).forEach(function (link) {

    link.addEventListener("click", function () {

      if (window.innerWidth <= 860) {

        navLinks.classList.remove("mobile-open");

        burger.textContent = "☰";

        if (dropdownMenu) {
          dropdownMenu.classList.remove(
            "mobile-dropdown-open"
          );
        }

      }

    });

  });


  /* ==============================
     DESKTOP RESET
  ============================== */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 860) {

      navLinks.classList.remove("mobile-open");

      burger.textContent = "☰";

      if (dropdownMenu) {
        dropdownMenu.classList.remove(
          "mobile-dropdown-open"
        );
      }

    }

  });

});