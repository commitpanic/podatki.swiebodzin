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

  // Formularz kontaktowy — wysyłka przez EmailJS (https://www.emailjs.com)
  const form = document.querySelector("#contact-form");
  if (form) {
    const EMAILJS_PUBLIC_KEY = "uwBL5vATk4VXwyUlY";
    const EMAILJS_SERVICE_ID = "service_k5dd71r";
    const EMAILJS_TEMPLATE_ID = "template_3bvsijt";

    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".form-status");
    const buttonLabel = button.textContent;

    if (window.emailjs) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    const showStatus = (text, type) => {
      status.textContent = text;
      status.className = `form-status form-status--${type}`;
      status.hidden = false;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Bot wypełnił ukryte pole — udajemy sukces, nic nie wysyłamy
      if (form.website.value) {
        form.reset();
        showStatus("Dziękuję, wiadomość została wysłana.", "success");
        return;
      }

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();

      // Kilka nazw dla tych samych danych, żeby pasowało do typowych szablonów EmailJS
      const params = {
        name,
        from_name: name,
        email,
        reply_to: email,
        phone: phone || "nie podano",
        message,
        title: `Zapytanie ze strony — ${name}`,
      };

      button.disabled = true;
      button.textContent = "Wysyłanie…";
      status.hidden = true;

      try {
        if (!window.emailjs) throw new Error("EmailJS SDK not loaded");
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        form.reset();
        showStatus("Dziękuję, wiadomość została wysłana. Odpowiem najszybciej, jak to możliwe.", "success");
      } catch (err) {
        console.error("EmailJS error:", err);
        showStatus(
          "Nie udało się wysłać wiadomości. Zadzwoń pod numer 691 125 322 lub napisz na beata@podatki.swiebodzin.pl.",
          "error"
        );
      } finally {
        button.disabled = false;
        button.textContent = buttonLabel;
      }
    });
  }
});
