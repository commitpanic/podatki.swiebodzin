# podatki.swiebodzin.pl — strona statyczna

Natywna wersja strony (HTML/CSS/JS, bez frameworków i CMS) przygotowana do hostowania na GitHub Pages.

## Struktura

```
index.html          — strona główna (hero, usługi, sekcja kontaktowa #kontakt z formularzem i mapą)
o-mnie.html          — podstrona "O mnie"
uslugi.html          — podstrona "Usługi"
polityka-prywatnosci.html — polityka prywatności
assets/css/style.css — style
assets/js/main.js    — nawigacja mobilna + obsługa formularza kontaktowego
assets/img/          — zdjęcia i logotypy
```

## Uruchomienie lokalne

Wystarczy otworzyć `index.html` w przeglądarce albo uruchomić prosty serwer, np.:

```powershell
python -m http.server 8000
```

i wejść na `http://localhost:8000`.

## Publikacja na GitHub Pages

1. Utwórz repozytorium na GitHubie i wypchnij do niego zawartość tego folderu (branch `main`).
2. W ustawieniach repozytorium: **Settings → Pages → Source** wybierz branch `main` i folder `/ (root)`.
3. Jeśli używasz własnej domeny (`podatki.swiebodzin.pl`), dodaj plik `CNAME` z jej nazwą oraz skonfiguruj rekord DNS (CNAME/ALIAS) wskazujący na `<użytkownik>.github.io`.

Plik `.nojekyll` jest już dodany, aby GitHub Pages nie przetwarzał strony przez Jekylla.

## Formularz kontaktowy

GitHub Pages nie obsługuje backendu, więc formularz na stronie głównej (sekcja `#kontakt`) wysyła wiadomości przez [EmailJS](https://www.emailjs.com). Identyfikatory usługi, szablonu i klucz publiczny są w `assets/js/main.js`. Klucz publiczny EmailJS jest z założenia jawny.

Formularz przekazuje do szablonu zmienne: `{{name}}`, `{{from_name}}`, `{{email}}`, `{{reply_to}}`, `{{phone}}`, `{{message}}`, `{{title}}`.

Ochrona przed spamem: ukryte pole-pułapka `website` w formularzu. Dodatkowo w panelu EmailJS (Account → Security) warto ograniczyć dozwolone domeny do adresu strony.
