export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    rooms: { en: "Rooms", pl: "Pokoje", is: "Herbergi" },
    amenities: { en: "Amenities", pl: "Udogodnienia", is: "Þægindi" },
    reviews: { en: "Reviews", pl: "Opinie", is: "Umsagnir" },
    contact: { en: "Contact", pl: "Kontakt", is: "Hafa samband" },
    experiences: { en: "Experiences", pl: "Atrakcje", is: "Upplifanir" },
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
  infoStrip: {
    checkin: { label: { en: "Check-in", pl: "Zameldowanie", is: "Innritun" }, value: "16:00 – 22:00" },
    breakfast: { label: { en: "Breakfast", pl: "Śniadanie", is: "Morgunmatur" }, value: "07:30 – 09:30" },
    checkout: { label: { en: "Check-out", pl: "Wymeldowanie", is: "Útritun" }, value: "11:00" },
    parking: { label: { en: "Free Parking", pl: "Bezpłatny parking", is: "Ókeypis bílastæði" } },
    wifi: { label: { en: "Free Wi-Fi", pl: "Bezpłatne Wi-Fi", is: "Ókeypis Wi-Fi" } },
    ev: { label: { en: "EV Charger", pl: "Ładowarka EV", is: "Rafbílahleðsla" } },
  },
  rooms: {
    title: { en: "Our", pl: "Nasze", is: "Okkar" },
    titleAccent: { en: "Rooms", pl: "Pokoje", is: "Herbergi" },
    subtitle: {
      en: "Each room is designed to blend Nordic comfort with Iceland's wild nature. Breakfast buffet, Wi-Fi, and parking always included.",
      pl: "Każdy pokój łączy nordycki komfort z dziką naturą Islandii. Śniadanie, Wi-Fi i parking zawsze w cenie.",
      is: "Hvert herbergi er hannað til að sameina norrænan þægindi við villta náttúru Íslands. Morgunverður, Wi-Fi og bílastæði alltaf innifalið.",
    },
    guests: { en: "guests", pl: "os.", is: "gestir" },
    perNight: { en: "ISK / night", pl: "ISK / noc", is: "ISK / nótt" },
    included: { en: "Included", pl: "W cenie", is: "Innifalið" },
    breakfastIncluded: {
      en: "Breakfast buffet, Wi-Fi & tea/coffee included",
      pl: "Śniadanie bufetowe, Wi-Fi i herbata/kawa w cenie",
      is: "Morgunverðarhlaðborð, Wi-Fi og te/kaffi innifalið",
    },
    list: [
      {
        name: "Eldvörp Suite",
        desc: {
          en: "Cozy lounge with fireplace and panoramic mountain views. King-size bed, private bathroom with shower. Perfect for couples.",
          pl: "Przytulny salon z kominkiem i panoramicznym widokiem na góry. Łóżko king-size, prywatna łazienka z prysznicem. Idealny dla par.",
          is: "Notalegur setustofa með arni og víðsýni yfir fjöll. King-size rúm, einkabaðherbergi með sturtu. Fullkomið fyrir pör.",
        },
        bathroom: { en: "Private bathroom", pl: "Prywatna łazienka", is: "Einkabaðherbergi" },
        bed: { en: "King-size bed", pl: "Łóżko king-size", is: "King-size rúm" },
        sqm: "45",
      },
      {
        name: "Jökull Room",
        desc: {
          en: "Spacious bedroom with glacier views. Double/twin bed, shared bathroom. Natural materials throughout.",
          pl: "Przestronna sypialnia z widokiem na lodowiec. Łóżko podwójne/dwa pojedyncze, wspólna łazienka. Naturalne materiały.",
          is: "Rúmgott svefnherbergi með útsýni yfir jökul. Tvíbreitt/tvö einbreitt rúm, sameiginlegt baðherbergi. Náttúruleg efni.",
        },
        bathroom: { en: "Shared bathroom", pl: "Wspólna łazienka", is: "Sameiginlegt baðherbergi" },
        bed: { en: "Double / Twin", pl: "Podwójne / Twin", is: "Tvíbreitt / Tvö einbreitt" },
        sqm: "38",
      },
      {
        name: "Hot Tub & Relax",
        desc: {
          en: "Private hot tub on the terrace overlooking volcanic landscape. Available to all guests. Towels and bathrobes provided.",
          pl: "Prywatna gorąca balia na tarasie z widokiem na wulkaniczny krajobraz. Dostępna dla wszystkich gości. Ręczniki i szlafroki zapewnione.",
          is: "Einka heitur pottur á verönd með útsýni yfir eldfjallslandslag. Öllum gestum opinn. Handklæði og sloppar fylgja.",
        },
        bathroom: null,
        bed: null,
        sqm: null,
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
      { label: { en: "Breakfast", pl: "Śniadanie", is: "Morgunmatur" }, desc: { en: "Homemade from local farms", pl: "Domowe z lokalnych farm", is: "Heimagerður frá nálægum bæjum" } },
      { label: { en: "Kitchen", pl: "Kuchnia", is: "Eldhús" }, desc: { en: "Fully equipped", pl: "W pełni wyposażona", is: "Fullbúið" } },
      { label: { en: "Safety", pl: "Bezpieczeństwo", is: "Öryggi" }, desc: { en: "24/7 host contact", pl: "24/7 kontakt z gospodarzem", is: "24/7 samband við gestgjafa" } },
    ],
  },
  experiences: {
    title: { en: "Nearby", pl: "Lokalne", is: "Nálægar" },
    titleAccent: { en: "Experiences", pl: "atrakcje", is: "upplifanir" },
    subtitle: {
      en: "The Westfjords are Iceland's best-kept secret. Here's what awaits you.",
      pl: "Fiordy Zachodnie to najlepiej strzeżony sekret Islandii. Oto co na Ciebie czeka.",
      is: "Vestfirðir eru best varðveitt leyndarmál Íslands. Hér er það sem bíður þín.",
    },
    items: [
      {
        title: { en: "Northern Lights", pl: "Zorza polarna", is: "Norðurljós" },
        desc: {
          en: "Sep–Mar: Watch the aurora dance right from the hot tub. No light pollution — one of the best spots in Iceland.",
          pl: "Wrz–Mar: Obserwuj zorzę polarną prosto z gorącej bali. Brak zanieczyszczenia światłem — jedno z najlepszych miejsc na Islandii.",
          is: "Sep–Mar: Horfðu á norðurljósin dansa beint úr heita pottinum. Engin ljósmengun — einn besti staðurinn á Íslandi.",
        },
        season: { en: "Sep – Mar", pl: "Wrz – Mar", is: "Sep – Mar" },
      },
      {
        title: { en: "Whale Watching", pl: "Obserwacja wielorybów", is: "Hvalaskoðun" },
        desc: {
          en: "Jun–Sep: Humpback whales, orcas, and dolphins in Ísafjarðardjúp bay. Boat tours from 15 min drive.",
          pl: "Cze–Wrz: Humbacki, orki i delfiny w zatoce Ísafjarðardjúp. Rejsy z 15 min jazdy.",
          is: "Jún–Sep: Hnúfubakur, háhyrningur og höfrungur í Ísafjarðardjúpi. Bátaferðir frá 15 mín akstur.",
        },
        season: { en: "Jun – Sep", pl: "Cze – Wrz", is: "Jún – Sep" },
      },
      {
        title: { en: "Hiking & Trails", pl: "Trekking i szlaki", is: "Gönguferðir" },
        desc: {
          en: "Hornstrandir nature reserve, Dynjandi waterfall, and countless unmarked trails through ancient valleys.",
          pl: "Rezerwat Hornstrandir, wodospad Dynjandi i niezliczone szlaki przez pradawne doliny.",
          is: "Hornstrandir náttúruvernd, Dynjandi foss og óteljandi ómerktar leiðir um fornar dalir.",
        },
        season: { en: "May – Oct", pl: "Maj – Paź", is: "Maí – Okt" },
      },
      {
        title: { en: "Hot Springs", pl: "Gorące źródła", is: "Heitar laugar" },
        desc: {
          en: "Natural geothermal pools hidden in the landscape. Hellulaug and Reykjafjarðarlaug — wild bathing at its finest.",
          pl: "Naturalne baseny geotermalne ukryte w krajobrazie. Hellulaug i Reykjafjarðarlaug — dzikie kąpiele w najlepszym wydaniu.",
          is: "Náttúrulegir jarðhitalaugar faldir í landslaginu. Hellulaug og Reykjafjarðarlaug — villtar böðun á sínu besta.",
        },
        season: { en: "Year-round", pl: "Cały rok", is: "Allt árið" },
      },
    ],
  },
  host: {
    tag: { en: "YOUR HOST", pl: "TWOJA GOSPODYNI", is: "GESTGJAFINN" },
    name: "Guðrún Helgadóttir",
    title: { en: "Born in the Westfjords.", pl: "Urodzona w Fiordach Zachodnich.", is: "Fædd á Vestfjörðum." },
    titleAccent: { en: "Living for the land.", pl: "Żyjąca dla tej ziemi.", is: "Lifir fyrir landið." },
    story: {
      en: "I've lived in the Westfjords my entire life. My grandmother ran a guesthouse here in the 1960s, and I always dreamed of continuing that tradition. Fjallsýn is my way of sharing this incredible, untouched part of Iceland with the world. I prepare breakfast with ingredients from local farms, and I know every hidden trail and hot spring within a hundred kilometres. As we say in Iceland — Þetta reddast. Everything will work out.",
      pl: "Całe życie mieszkam w Fiordach Zachodnich. Moja babcia prowadziła tu pensjonat w latach 60., a ja zawsze marzyłam o kontynuowaniu tej tradycji. Fjallsýn to mój sposób na dzielenie się tą niesamowitą, nietknięta częścią Islandii ze światem. Przygotowuję śniadania z produktów od lokalnych farmerów i znam każdy ukryty szlak i gorące źródło w promieniu stu kilometrów. Jak mówimy na Islandii — Þetta reddast. Wszystko się ułoży.",
      is: "Ég hef búið á Vestfjörðum allt mitt líf. Amma mín rak gistiheimili hér á sjöunda áratugnum og ég dreymdi alltaf um að halda þeirri hefð áfram. Fjallsýn er mín leið til að deila þessum ótrúlega, ósnortna hluta Íslands með heiminum. Ég útbý morgunmat úr hráefnum frá nálægum bæjum og þekki hverja falda gönguleið og heita laug innan hundraðs kílómetra. Eins og við segjum á Íslandi — Þetta reddast.",
    },
    quote: {
      en: "\"The mountains don't care about your schedule. Come, slow down, and breathe.\"",
      pl: "\"Góry nie przejmują się twoim grafikiem. Przyjdź, zwolnij i oddychaj.\"",
      is: "\"Fjöllin er sama um dagskrána þína. Komdu, hægðu á þér og andaðu.\"",
    },
  },
  featuredOn: {
    tag: { en: "FEATURED ON", pl: "WIDZIANE W", is: "BIRT Á" },
    items: [
      { name: "Booking.com", score: "9.4 / 10" },
      { name: "TripAdvisor", score: "5.0 / 5" },
      { name: "Google", score: "4.9 / 5" },
      {
        name: "Guide to Iceland",
        quote: {
          en: "One of the best-kept secrets in the Westfjords",
          pl: "Jeden z najlepiej strzeżonych sekretów Fiordów Zachodnich",
          is: "Eitt af best varðveittu leyndarmálum Vestfjarða",
        },
      },
    ],
  },
  gallery: {
    title: { en: "Moments from", pl: "Chwile z", is: "Augnablik frá" },
    titleAccent: { en: "Fjallsýn", pl: "Fjallsýn", is: "Fjallsýn" },
  },
  location: {
    title: { en: "Getting", pl: "Jak do nas", is: "Hvernig á að" },
    titleAccent: { en: "here", pl: "dotrzeć", is: "komast hingað" },
    subtitle: {
      en: "Remote doesn't mean hard to reach. Here's how to find us.",
      pl: "Odległość nie oznacza trudnego dojazdu. Oto jak nas znaleźć.",
      is: "Afskekktur þýðir ekki erfiður aðgangur. Svona finnurðu okkur.",
    },
    airport: {
      label: { en: "Nearest Airport", pl: "Najbliższe lotnisko", is: "Næsti flugvöllur" },
      value: { en: "Ísafjörður (IFJ) — 25 min drive", pl: "Ísafjörður (IFJ) — 25 min jazdy", is: "Ísafjörður (IFJ) — 25 mín akstur" },
    },
    drive: {
      label: { en: "From Reykjavík", pl: "Z Reykjavíku", is: "Frá Reykjavík" },
      value: { en: "~5h via Route 1 & 61 (scenic!)", pl: "~5h trasą nr 1 i 61 (malownicza!)", is: "~5 klst um leið 1 og 61 (falleg!)" },
    },
    road: {
      label: { en: "Road Conditions", pl: "Stan dróg", is: "Vegaástand" },
      value: { en: "Paved roads year-round. F-roads closed in winter.", pl: "Drogi asfaltowe cały rok. Drogi F zamknięte zimą.", is: "Malbikaðir vegir allt árið. F-vegir lokaðir á veturna." },
    },
    pickup: {
      label: { en: "Airport Pickup", pl: "Odbiór z lotniska", is: "Sótt á flugvöll" },
      value: { en: "Free pickup available — just ask!", pl: "Bezpłatny odbiór — wystarczy zapytać!", is: "Ókeypis sótt — bara spurðu!" },
    },
    roadLink: { en: "Check road.is for live conditions", pl: "Sprawdź road.is na żywo", is: "Skoðaðu road.is fyrir ástand" },
    safetravel: { en: "Register your trip at safetravel.is", pl: "Zarejestruj podróż na safetravel.is", is: "Skráðu ferðina á safetravel.is" },
    mapLabel: { en: "View on Google Maps", pl: "Zobacz na Google Maps", is: "Skoða á Google Maps" },
  },
  pricing: {
    title: { en: "Seasonal", pl: "Cennik", is: "Árstíðar" },
    titleAccent: { en: "Pricing", pl: "sezonowy", is: "verðlag" },
    subtitle: {
      en: "Book directly and save 15–20% compared to Booking.com & Airbnb.",
      pl: "Rezerwuj bezpośrednio i oszczędź 15–20% w porównaniu z Booking.com i Airbnb.",
      is: "Bókaðu beint og sparaðu 15–20% miðað við Booking.com og Airbnb.",
    },
    seasons: [
      {
        name: { en: "❄️ Winter", pl: "❄️ Zima", is: "❄️ Vetur" },
        months: { en: "Nov – Mar", pl: "Lis – Mar", is: "Nóv – Mar" },
        eldvorp: "19 900",
        jokull: "14 900",
        note: { en: "Aurora season! Best for northern lights.", pl: "Sezon zorzy! Najlepszy na zorzę polarną.", is: "Norðurljósatímabil! Best fyrir norðurljós." },
      },
      {
        name: { en: "🌸 Spring", pl: "🌸 Wiosna", is: "🌸 Vor" },
        months: { en: "Apr – May", pl: "Kwi – Maj", is: "Apr – Maí" },
        eldvorp: "22 900",
        jokull: "17 900",
        note: { en: "Puffins arrive. Waterfalls at full power.", pl: "Przylatują maskonury. Wodospady pełną mocą.", is: "Lundinn kemur. Fossar í fullum krafti." },
      },
      {
        name: { en: "☀️ Summer", pl: "☀️ Lato", is: "☀️ Sumar" },
        months: { en: "Jun – Aug", pl: "Cze – Sie", is: "Jún – Ágú" },
        eldvorp: "29 900",
        jokull: "24 900",
        note: { en: "Midnight sun. 24h daylight. Peak hiking.", pl: "Słońce o północy. 24h światła. Szczyt sezonu trekkingowego.", is: "Miðnætursól. 24 klst dagsljós. Besti göngutíminn." },
      },
      {
        name: { en: "🍂 Autumn", pl: "🍂 Jesień", is: "🍂 Haust" },
        months: { en: "Sep – Oct", pl: "Wrz – Paź", is: "Sep – Okt" },
        eldvorp: "22 900",
        jokull: "17 900",
        note: { en: "Colours change. Fewer tourists. First auroras.", pl: "Kolory się zmieniają. Mniej turystów. Pierwsze zorze.", is: "Litir breytast. Færri ferðamenn. Fyrstu norðurljósin." },
      },
    ],
    perNight: { en: "ISK/night", pl: "ISK/noc", is: "ISK/nótt" },
    directSave: { en: "Direct booking — save 15%", pl: "Rezerwacja bezpośrednia — oszczędź 15%", is: "Bein bókun — sparaðu 15%" },
  },
  faq: {
    title: { en: "Frequently Asked", pl: "Często zadawane", is: "Algengar" },
    titleAccent: { en: "Questions", pl: "pytania", is: "spurningar" },
    items: [
      {
        q: { en: "Is the cottage suitable for children?", pl: "Czy domek jest odpowiedni dla dzieci?", is: "Er skálinn hentugur fyrir börn?" },
        a: { en: "Yes! The Jökull Room fits families of up to 4. We provide cots and high chairs on request. The area is safe, but please supervise children near the hot tub.", pl: "Tak! Pokój Jökull pomieści rodziny do 4 osób. Na życzenie zapewniamy łóżeczka i krzesełka. Okolica jest bezpieczna, ale prosimy o nadzór nad dziećmi przy hot tubie.", is: "Já! Jökull herbergið rúmar fjölskyldur upp að 4. Við útvegum barnarúm og háa stóla ef óskað er. Svæðið er öruggt en vinsamlegast hafið eftirlit með börnum við heita pottinn." },
      },
      {
        q: { en: "Do you have EV charging?", pl: "Czy macie ładowanie EV?", is: "Er rafbílahleðsla til staðar?" },
        a: { en: "Yes, we have a 22kW Type 2 charger available free for all guests. Iceland runs almost entirely on renewable energy — charge guilt-free!", pl: "Tak, mamy ładowarkę 22kW Type 2 dostępną bezpłatnie dla wszystkich gości. Islandia działa prawie wyłącznie na energii odnawialnej — ładuj bez wyrzutów sumienia!", is: "Já, við höfum 22kW Type 2 hleðslutæki ókeypis öllum gestum. Ísland keyrir nánast eingöngu á endurnýjanlega orku — hladdu samviskuhreinlega!" },
      },
      {
        q: { en: "What if the weather is bad?", pl: "Co jeśli pogoda będzie zła?", is: "Hvað ef veðrið er slæmt?" },
        a: { en: "Icelandic weather is part of the experience! The cottage is fully equipped for storms — cozy fireplace, board games, books, and a fully stocked kitchen. Many guests say the stormy nights were their favourite. Þetta reddast!", pl: "Islandzka pogoda to część doświadczenia! Domek jest w pełni przygotowany na burze — przytulny kominek, gry planszowe, książki i w pełni zaopatrzona kuchnia. Wielu gości mówi, że burzliwe noce były ich ulubionymi. Þetta reddast!", is: "Íslenskt veður er hluti af upplifuninni! Skálinn er fullbúinn fyrir storma — notalegur arinn, borðspil, bækur og fullbúið eldhús. Margir gestir segja að stormarnir hafi verið uppáhalds nóttirnar. Þetta reddast!" },
      },
      {
        q: { en: "Can you arrange tours or activities?", pl: "Czy możecie zorganizować wycieczki?", is: "Getið þið skipulagt ferðir?" },
        a: { en: "Absolutely. We work with trusted local guides for kayaking, fishing, horse riding, and glacier walks. Guðrún can arrange everything — just ask when you book.", pl: "Oczywiście. Współpracujemy z zaufanymi lokalnymi przewodnikami — kajakowanie, wędkowanie, jazda konna i spacery po lodowcu. Guðrún wszystko zorganizuje — wystarczy zapytać przy rezerwacji.", is: "Algjörlega. Við vinnum með traustum staðbundnum leiðsögumönnum fyrir siglingar, veiðar, hestamennsku og jökulferðir. Guðrún getur skipulagt allt — bara spurðu þegar þú bókar." },
      },
      {
        q: { en: "What's your cancellation policy?", pl: "Jaka jest polityka anulowania?", is: "Hver er afbókunarstefnan?" },
        a: { en: "Free cancellation up to 7 days before check-in. 50% refund for cancellations 3–7 days before. No refund for cancellations less than 3 days before arrival.", pl: "Bezpłatne anulowanie do 7 dni przed zameldowaniem. 50% zwrotu za anulowanie 3–7 dni wcześniej. Brak zwrotu za anulowanie mniej niż 3 dni przed przyjazdem.", is: "Ókeypis afbókun allt að 7 dögum fyrir innritun. 50% endurgreiðsla fyrir afbókanir 3–7 dögum fyrir. Engin endurgreiðsla fyrir afbókanir minna en 3 dögum fyrir komu." },
      },
      {
        q: { en: "Do you accept card payments?", pl: "Czy akceptujecie płatności kartą?", is: "Takið þið við kortum?" },
        a: { en: "Yes — Visa, Mastercard, and Íslandsbanki are accepted. We also accept ISK cash. Payment is taken upon arrival.", pl: "Tak — akceptujemy Visa, Mastercard i Íslandsbanki. Przyjmujemy też ISK gotówką. Płatność przy zameldowaniu.", is: "Já — Visa, Mastercard, og Íslandsbanki. Við tökum líka við ISK reiðufé. Greitt er við komu." },
      },
    ],
  },
  reviews: {
    title: { en: "Guest", pl: "Opinie", is: "Umsagnir" },
    titleAccent: { en: "reviews", pl: "gości", is: "gesta" },
    subtitle: { en: "What our guests say across platforms", pl: "Co mówią nasi goście na różnych platformach", is: "Hvað segja gestir okkar á mismunandi vettvangi" },
    platforms: {
      booking: { en: "Booking.com", score: "9.4 / 10", reviews: "87" },
      tripadvisor: { en: "TripAdvisor", score: "5.0 / 5", reviews: "24" },
      google: { en: "Google", score: "4.9 / 5", reviews: "16" },
    },
  },
  booking: {
    title: { en: "Book directly —", pl: "Zarezerwuj bezpośrednio —", is: "Bókaðu beint —" },
    titleAccent: { en: "best price guarantee", pl: "gwarancja najniższej ceny", is: "besta verðtryggingin" },
    subtitle: {
      en: "Book with us directly and pay less than on Booking.com or Airbnb.",
      pl: "Rezerwując u nas bezpośrednio, płacisz mniej niż na Booking.com czy Airbnb.",
      is: "Bókaðu beint hjá okkur og borgaðu minna en á Booking.com eða Airbnb.",
    },
    checkAvailability: { en: "Check availability", pl: "Sprawdź dostępność", is: "Athuga framboð" },
    whatsapp: { en: "Chat on WhatsApp", pl: "Napisz na WhatsApp", is: "Spjallaðu á WhatsApp" },
  },
  contactForm: {
    title: { en: "Send us a", pl: "Wyślij nam", is: "Sendu okkur" },
    titleAccent: { en: "message", pl: "wiadomość", is: "skilaboð" },
    subtitle: {
      en: "Have a question? Want to book? We usually respond within a few hours.",
      pl: "Masz pytanie? Chcesz zarezerwować? Zwykle odpowiadamy w ciągu kilku godzin.",
      is: "Ertu með spurningu? Viltu bóka? Við svörum yfirleitt innan nokkurra klukkustunda.",
    },
    name: { en: "Your name", pl: "Twoje imię", is: "Nafnið þitt" },
    email: { en: "Your email", pl: "Twój e-mail", is: "Netfangið þitt" },
    dates: { en: "Preferred dates", pl: "Preferowane daty", is: "Óskaðar dagsetningar" },
    guests: { en: "Number of guests", pl: "Liczba gości", is: "Fjöldi gesta" },
    message: { en: "Your message", pl: "Twoja wiadomość", is: "Skilaboðin þín" },
    send: { en: "Send message", pl: "Wyślij wiadomość", is: "Senda skilaboð" },
  },
  cookie: {
    text: {
      en: "We use cookies to improve your experience. By continuing, you agree to our use of cookies.",
      pl: "Używamy ciasteczek, aby poprawić Twoje doświadczenie. Kontynuując, zgadzasz się na ich użycie.",
      is: "Við notum vefkökur til að bæta upplifun þína. Með því að halda áfram samþykkirðu notkun þeirra.",
    },
    accept: { en: "Accept", pl: "Akceptuję", is: "Samþykkja" },
    reject: { en: "Reject", pl: "Odrzuć", is: "Hafna" },
  },
  websiteCta: {
    tag: { en: "BUSINESS AUTOPILOT", pl: "BIZNES NA AUTOPILOCIE", is: "SJÁLFVIRK VIÐSKIPTI" },
    title: { en: "Want a Website Like This", pl: "Chcesz taką stronę", is: "Viltu vefsíðu eins og þessa" },
    titleAccent: { en: "For Your Business?", pl: "Dla Twojego biznesu?", is: "Fyrir þitt fyrirtæki?" },
    subtitle: {
      en: "We build stunning, personalised websites for guesthouses, hotels, and tourism businesses in Iceland. Everything done for you — website, photos, ads, social media. One plan. Zero stress.",
      pl: "Tworzymy piękne, spersonalizowane strony dla pensjonatów, hoteli i firm turystycznych na Islandii. Wszystko zrobione za Ciebie — strona, zdjęcia, reklamy, social media. Jeden plan. Zero stresu.",
      is: "Við smíðum fallegar, sérsniðnar vefsíður fyrir gistiheimili, hótel og ferðaþjónustu á Íslandi. Allt gert fyrir þig — vefsíða, myndir, auglýsingar, samfélagsmiðlar. Ein áætlun. Enginn streitingur.",
    },
    features: [
      { en: "Custom Website", pl: "Strona na zamówienie", is: "Sérsniðin vefsíða" },
      { en: "Professional Photos", pl: "Profesjonalne zdjęcia", is: "Fagmyndir" },
      { en: "Booking Integration", pl: "Integracja z rezerwacjami", is: "Bókunarsamþætting" },
      { en: "All-In-One Plan", pl: "Pakiet All-In-One", is: "Allt-í-einu áætlun" },
    ],
    cta: { en: "Get Started", pl: "Rozpocznij", is: "Byrjaðu" },
    price: { en: "From only", pl: "Już od", is: "Frá aðeins" },
    priceAccent: { en: "19,990 ISK/month", pl: "19 990 ISK/mies.", is: "19.990 ISK/mán." },
    badges: { en: "Live in 7 days · Fully personalised · No long-term contracts", pl: "Gotowe w 7 dni · W pełni spersonalizowane · Bez długich umów", is: "Tilbúið á 7 dögum · Fullkomlega sérsniðið · Engir langtímasamningar" },
  },
  footer: {
    rights: { en: "© 2026 Fjallsýn Cottage. All rights reserved. Kennitala: 123456-7890", pl: "© 2026 Fjallsýn Cottage. Wszelkie prawa zastrzeżone. Kennitala: 123456-7890", is: "© 2026 Fjallsýn Cottage. Allur réttur áskilinn. Kennitala: 123456-7890" },
    quickLinks: { en: "Quick Links", pl: "Szybkie linki", is: "Flýtileiðir" },
    usefulLinks: { en: "Useful Links", pl: "Przydatne linki", is: "Gagnlegir tenglar" },
  },
} as const;

export type Translations = typeof translations;
