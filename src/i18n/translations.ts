export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    rooms: { en: "Rooms", pl: "Pokoje", is: "Herbergi" },
    amenities: { en: "Amenities", pl: "Udogodnienia", is: "Þægindi" },
    reviews: { en: "Reviews", pl: "Opinie", is: "Umsagnir" },
    contact: { en: "Contact", pl: "Kontakt", is: "Hafa samband" },
    book: { en: "Book now", pl: "Rezerwuj", is: "Bóka" },
  },
  hero: {
    location: { en: "Vestfjörðar, Ísland", pl: "Vestfjörðar, Ísland", is: "Vestfjörðar, Ísland" },
    alt: {
      en: "Cozy cabin against Icelandic mountains and northern lights",
      pl: "Przytulny domek na tle islandzkich gór i zorzy polarnej",
      is: "Notaleg skáli við íslensku fjöll og norðurljós",
    },
    subtitle: {
      en: "Escape the noise and immerse yourself in Icelandic wilderness. A cozy cottage with views of mountains, northern lights and endless horizons.",
      pl: "Ucieknij od zgiełku i zanurz się w islandzkiej dziczy. Przytulny domek z widokiem na góry, zorzę polarną i bezkresne horyzonty.",
      is: "Flýðu hávaðann og sökktu þér í íslenska víðerni. Notaleg skáli með útsýni yfir fjöll, norðurljós og endalausan sjóndeildarhring.",
    },
    rating: { en: "4.9 · 127 reviews", pl: "4.9 · 127 recenzji", is: "4.9 · 127 umsagnir" },
    bookNow: { en: "Book now", pl: "Zarezerwuj teraz", is: "Bóka núna" },
    viewRooms: { en: "View rooms", pl: "Zobacz pokoje", is: "Skoða herbergi" },
  },
  rooms: {
    title: { en: "Our", pl: "Nasze", is: "Okkar" },
    titleAccent: { en: "Rooms", pl: "Pokoje", is: "Herbergi" },
    subtitle: {
      en: "Each room is designed to blend Nordic comfort with Iceland's wild nature.",
      pl: "Każdy pokój został zaprojektowany, by łączyć nordycki komfort z dziką naturą Islandii.",
      is: "Hvert herbergi er hannað til að sameina norrænan þægindi við villta náttúru Íslands.",
    },
    guests: { en: "guests", pl: "os.", is: "gestir" },
    perNight: { en: "ISK / night", pl: "ISK / noc", is: "ISK / nótt" },
    included: { en: "Included", pl: "W cenie", is: "Innifalið" },
    list: [
      {
        name: "Eldvörp Suite",
        desc: {
          en: "Cozy lounge with fireplace and panoramic mountain views. Perfect for couples.",
          pl: "Przytulny salon z kominkiem i panoramicznym widokiem na góry. Idealny dla par.",
          is: "Notalegur setustofa með arni og víðsýni yfir fjöll. Fullkomið fyrir pör.",
        },
      },
      {
        name: "Jökull Room",
        desc: {
          en: "Spacious bedroom with glacier views. King-size bed, natural materials.",
          pl: "Przestronna sypialnia z widokiem na lodowiec. Łóżko king-size, naturalne materiały.",
          is: "Rúmgott svefnherbergi með útsýni yfir jökul. King-size rúm, náttúruleg efni.",
        },
      },
      {
        name: "Hot Tub & Relax",
        desc: {
          en: "Private hot tub on the terrace overlooking volcanic landscape. Available to all guests.",
          pl: "Prywatna gorąca balia na tarasie z widokiem na wulkaniczny krajobraz. Dostępna dla wszystkich gości.",
          is: "Einka heitur pottur á verönd með útsýni yfir eldfjallslandslag. Öllum gestum opinn.",
        },
      },
    ],
  },
  amenities: {
    title: { en: "What we", pl: "Co", is: "Hvað við" },
    titleAccent: { en: "offer", pl: "oferujemy", is: "bjóðum" },
    subtitle: {
      en: "Everything you need for a perfect getaway at the edge of the world.",
      pl: "Wszystko, czego potrzebujesz do idealnego wypoczynku na krańcu świata.",
      is: "Allt sem þú þarft fyrir fullkomna hvíld á jaðri heimsins.",
    },
    items: [
      { label: { en: "Fireplace", pl: "Kominek", is: "Arinn" }, desc: { en: "Real fire in every room", pl: "Prawdziwy ogień w każdym pokoju", is: "Alvöru eldur í hverju herbergi" } },
      { label: { en: "Hot Tub", pl: "Hot Tub", is: "Heitur pottur" }, desc: { en: "Outdoor hot tub under the open sky", pl: "Gorąca balia pod gołym niebem", is: "Heitur pottur undir berum himni" } },
      { label: { en: "Wi-Fi", pl: "Wi-Fi", is: "Wi-Fi" }, desc: { en: "Fast Starlink internet", pl: "Szybki internet Starlink", is: "Hraðvirkt Starlink internet" } },
      { label: { en: "Parking", pl: "Parking", is: "Bílastæði" }, desc: { en: "Free private parking", pl: "Bezpłatny prywatny parking", is: "Ókeypis einkabílastæði" } },
      { label: { en: "Trails", pl: "Szlaki", is: "Gönguleiðir" }, desc: { en: "Hiking trails from the doorstep", pl: "Piesze wycieczki od progu", is: "Gönguleiðir frá dyrunum" } },
      { label: { en: "Breakfast", pl: "Śniadanie", is: "Morgunmatur" }, desc: { en: "Local Icelandic products", pl: "Lokalne islandzkie produkty", is: "Staðbundin íslensk matvæli" } },
      { label: { en: "Kitchen", pl: "Kuchnia", is: "Eldhús" }, desc: { en: "Fully equipped", pl: "W pełni wyposażona", is: "Fullbúið" } },
      { label: { en: "Safety", pl: "Bezpieczeństwo", is: "Öryggi" }, desc: { en: "24/7 host contact", pl: "24/7 kontakt z gospodarzem", is: "24/7 samband við gestgjafa" } },
    ],
  },
  reviews: {
    title: { en: "Guest", pl: "Opinie", is: "Umsagnir" },
    titleAccent: { en: "reviews", pl: "gości", is: "gesta" },
    subtitle: { en: "4.9 / 5 based on 127 reviews", pl: "4.9 / 5 na podstawie 127 recenzji", is: "4.9 / 5 byggt á 127 umsögnum" },
  },
  booking: {
    title: { en: "Book directly —", pl: "Zarezerwuj bezpośrednio —", is: "Bókaðu beint —" },
    titleAccent: { en: "no commission", pl: "bez prowizji", is: "án þóknunar" },
    subtitle: {
      en: "Book with us directly and pay less than on Booking.com or Airbnb. No middlemen, no hidden fees.",
      pl: "Rezerwując u nas bezpośrednio, płacisz mniej niż na Booking.com czy Airbnb. Bez pośredników, bez ukrytych opłat.",
      is: "Bókaðu beint hjá okkur og borgaðu minna en á Booking.com eða Airbnb. Engir milliliðir, engin falin gjöld.",
    },
    checkAvailability: { en: "Check availability", pl: "Sprawdź dostępność", is: "Athuga framboð" },
  },
  footer: {
    rights: { en: "© 2026 Fjallsýn Cottage. All rights reserved.", pl: "© 2026 Fjallsýn Cottage. Wszelkie prawa zastrzeżone.", is: "© 2026 Fjallsýn Cottage. Allur réttur áskilinn." },
  },
} as const;

export type Translations = typeof translations;
