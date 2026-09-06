# GLOSSARY — słownik domeny (PL / EN / IS)

<!-- Nazwy w kodzie MUSZĄ pochodzić stąd. Nowy termin w diffie = nowy wiersz tutaj. -->

| Termin w kodzie (EN) | PL | IS | Znaczenie / reguła biznesowa |
|---|---|---|---|
| `DemoDialog` / `DemoContext` | okno demo | — | modal zastępujący realną akcję (booking/mail/telefon/WhatsApp/formularz) komunikatem "to by zrobiło X"; to jest wizytówka SPRZEDAŻOWA, nie system rezerwacji |
| `room` (Eldvörp Suite, Jökull Room, Fjörður Room) | pokój | herbergi | jednostka noclegowa; nazwy nawiązują do islandzkich zjawisk geologicznych (eldvörp=krater wulkaniczny, jökull=lodowiec, fjörður=fiord) |
| `checkIn` / `checkOut` | zameldowanie / wymeldowanie | innritun / útritun | pola formularza sprawdzania dostępności; nie łączą się z żadnym kalendarzem — tylko UI |
| `guests` | liczba gości | fjöldi gesta | pole formularza, wartość tekstowa (nie waliduje limitu miejsc) |
| `lang` (`pl`/`en`/`is`) | język | tungumál | przełącznik `LanguageSwitcher`; źródło tłumaczeń = `LanguageContext.tsx` |
| `t` (translation object) | słownik tłumaczeń | orðabók | obiekt zwracany przez `useLang()`, klucze po sekcjach (np. `t.contactForm.title[lang]`) |
| Host (Guðrún) | gospodyni/właścicielka | húsráðandi | fikcyjna/reprezentatywna postać właścicielki w `HostStory` i tekstach DemoDialog |
