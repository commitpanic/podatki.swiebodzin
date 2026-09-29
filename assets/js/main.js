// Nawigacja mobilna
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("is-open");
      toggle.classList.toggle("is-active");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-active");
      });
    });
  }

  // Formularz kontaktowy — otwiera domyślny klient poczty z wypełnioną treścią
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();

      const subject = encodeURIComponent(`Zapytanie ze strony — ${name}`);
      const body = encodeURIComponent(
        `Imię i nazwisko: ${name}\nTelefon: ${phone}\nEmail: ${email}\n\nWiadomość:\n${message}`
      );

      window.location.href = `mailto:beata@podatki.swiebodzin.pl?subject=${subject}&body=${body}`;
    });
  }
});
