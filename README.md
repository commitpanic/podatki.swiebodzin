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

Ponieważ GitHub Pages nie obsługuje backendu, formularz na stronie kontaktowej otwiera domyślny klient poczty użytkownika z gotową treścią wiadomości (`mailto:`). Jeśli w przyszłości potrzebna będzie wysyłka bez pośrednictwa klienta pocztowego, można podpiąć usługę typu Formspree/Getform i zmienić `assets/js/main.js`.
