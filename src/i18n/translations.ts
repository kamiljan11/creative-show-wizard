export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    rooms: { en: "Rooms", pl: "Pokoje", is: "Herbergi" },
    amenities: { en: "Amenities", pl: "Udogodnienia", is: "Þægindi" },
    reviews: { en: "Reviews", pl: "Opinie", is: "Umsagnir" },
    contact: { en: "Contact", pl: "Kontakt", is: "Hafa samband" },
    experiences: { en: "Experiences", pl: "Atrakcje", is: "Upplifanir" },
    location: { en: "Location", pl: "Lokalizacja", is: "Staðsetning" },
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
      en: "Where my grandmother once welcomed travellers, I now welcome you. A small cottage at the edge of the world, where the mountains meet the sea.",
      pl: "Tam, gdzie moja babcia witała kiedyś podróżnych, teraz witam Ciebie. Mały domek na krańcu świata, gdzie góry spotykają morze.",
      is: "Þar sem amma mín bauð ferðalöngum velkomna, býð ég þér nú velkominn. Lítil skáli á jaðri heimsins, þar sem fjöllin mætast sjónum.",
    },
    rating: { en: "4.9 · 127 reviews", pl: "4.9 · 127 recenzji", is: "4.9 · 127 umsagnir" },
    bookNow: { en: "Book now", pl: "Zarezerwuj", is: "Bóka núna" },
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
    title: { en: "Where you'll", pl: "Gdzie", is: "Hvar þú" },
    titleAccent: { en: "sleep", pl: "zaśniesz", is: "sefur" },
    subtitle: {
      en: "Three spaces, each with a story. My grandfather built the original walls. I added the rest — warmth, comfort, and a view that never gets old. All guests share the outdoor hot tub and breakfast from our neighbour's farm.",
      pl: "Trzy przestrzenie, każda z własną historią. Mój dziadek zbudował oryginalne ściany. Ja dodałam resztę — ciepło, komfort i widok, który nigdy się nie nudzi. Wszyscy goście korzystają z gorącej bali na zewnątrz i śniadania z farmy sąsiada.",
      is: "Þrjú rými, hvert með sína sögu. Afi minn byggði upprunalegu veggina. Ég bætti við restinni — hlýju, þægindum og útsýni sem aldrei verður leiðinlegt. Allir gestir deila heita pottinum og morgunverði frá nágrannabunum.",
    },
    guests: { en: "guests", pl: "os.", is: "gestir" },
    perNight: { en: "ISK / night", pl: "ISK / noc", is: "ISK / nótt" },
    included: { en: "Included", pl: "W cenie", is: "Innifalið" },
    breakfastIncluded: {
      en: "Breakfast, Wi-Fi & tea/coffee always included",
      pl: "Śniadanie, Wi-Fi i herbata/kawa zawsze w cenie",
      is: "Morgunverður, Wi-Fi og te/kaffi alltaf innifalið",
    },
    hotTubShared: {
      en: "Outdoor hot tub access included",
      pl: "Dostęp do gorącej bali w cenie",
      is: "Aðgangur að heitum potti innifalinn",
    },
    list: [
      {
        name: "Eldvörp Suite",
        desc: {
          en: "Named after the lava fields nearby. The fireplace was my grandmother's idea — she said no guest should sleep cold. King bed, private bathroom, and the kind of silence you forgot existed.",
          pl: "Nazwa od pobliskich pól lawowych. Kominek to pomysł mojej babci — mówiła, że żaden gość nie powinien marzać. Łóżko king, prywatna łazienka i cisza, o jakiej zapomniałeś.",
          is: "Kennt við hraunin í nágrenninu. Arinninn var hugmynd ömmu minnar — hún sagði að enginn gestur ætti að sofa í kulda. King rúm, einkabaðherbergi og þögn sem þú hafðir gleymt.",
        },
        bathroom: { en: "Private bathroom", pl: "Prywatna łazienka", is: "Einkabaðherbergi" },
        bed: { en: "King-size bed", pl: "Łóżko king-size", is: "King-size rúm" },
        sqm: "45",
      },
      {
        name: "Jökull Room",
        desc: {
          en: "The glacier room. On clear mornings, the ice cap turns pink through the window. Simple, honest, and warm. Natural wood and wool throughout.",
          pl: "Pokój lodowcowy. W pogodne poranki czapa lodowa różowieje za oknem. Prosty, szczery i ciepły. Naturalne drewno i wełna.",
          is: "Jökullherbergið. Á björtum morgunum verður jökullinn bleikur í glugganum. Einfalt, heiðarlegt og hlýtt. Náttúrulegt tré og ull.",
        },
        bathroom: { en: "Shared bathroom", pl: "Wspólna łazienka", is: "Sameiginlegt baðherbergi" },
        bed: { en: "Double / Twin", pl: "Podwójne / Twin", is: "Tvíbreitt / Tvö einbreitt" },
        sqm: "38",
      },
      {
        name: "Fjörður Room",
        desc: {
          en: "The fjord room. Tucked under the eaves with twin beds and a reading nook. My favourite spot for morning coffee — the light hits the water just right.",
          pl: "Pokój fiordowy. Schowany pod okapem z dwoma łóżkami i kącikiem do czytania. Moje ulubione miejsce na poranną kawę — światło idealnie odbija się od wody.",
          is: "Fjarðarherbergið. Undir þakbrúninni með tvö rúm og leskrók. Uppáhalds staðurinn minn fyrir morgunkaffi — ljósið lendir einmitt á vatninu.",
        },
        bathroom: { en: "Shared bathroom", pl: "Wspólna łazienka", is: "Sameiginlegt baðherbergi" },
        bed: { en: "Twin beds", pl: "Dwa łóżka", is: "Tvö einbreitt rúm" },
        sqm: "28",
      },
    ],
  },
  amenities: {
    title: { en: "What's", pl: "Co jest", is: "Hvað er" },
    titleAccent: { en: "included", pl: "w cenie", is: "innifalið" },
    subtitle: {
      en: "I don't charge extra for things that should be obvious. Everything below is part of your stay.",
      pl: "Nie dolicam za rzeczy, które powinny być oczywiste. Wszystko poniżej to część Twojego pobytu.",
      is: "Ég rukka ekki aukalega fyrir hluti sem ættu að vera sjálfsagðir. Allt hér að neðan er hluti af dvölinni.",
    },
    items: [
      { label: { en: "Fireplace", pl: "Kominek", is: "Arinn" }, desc: { en: "Real birch fire — Amma's rule #1", pl: "Prawdziwy ogień z brzozy — zasada babci nr 1", is: "Alvöru birkieldur — regla ömmu #1" } },
      { label: { en: "Hot Tub", pl: "Hot Tub", is: "Heitur pottur" }, desc: { en: "Under open sky, heated by geothermal", pl: "Pod gołym niebem, ogrzewana geotermalnie", is: "Undir berum himni, hitaður af jarðhita" } },
      { label: { en: "Wi-Fi", pl: "Wi-Fi", is: "Wi-Fi" }, desc: { en: "Starlink — yes, even here", pl: "Starlink — tak, nawet tutaj", is: "Starlink — já, jafnvel hér" } },
      { label: { en: "Parking", pl: "Parking", is: "Bílastæði" }, desc: { en: "Right outside the door", pl: "Tuż za drzwiami", is: "Rétt fyrir utan dyrnar" } },
      { label: { en: "Trails", pl: "Szlaki", is: "Gönguleiðir" }, desc: { en: "I'll mark the best ones on your map", pl: "Zaznaczę Ci najlepsze na mapie", is: "Ég merki þær bestu á kortið þitt" } },
      { label: { en: "Breakfast", pl: "Śniadanie", is: "Morgunmatur" }, desc: { en: "From Siggi's farm next door", pl: "Z farmy Siggi'ego obok", is: "Frá Sigga bóndanum við hliðina" } },
      { label: { en: "Kitchen", pl: "Kuchnia", is: "Eldhús" }, desc: { en: "Cook your own catch if you like", pl: "Ugotuj swój połów, jeśli chcesz", is: "Eldaðu þinn eigin afla ef þú vilt" } },
      { label: { en: "Safety", pl: "Bezpieczeństwo", is: "Öryggi" }, desc: { en: "I live 5 minutes away — call anytime", pl: "Mieszkam 5 minut stąd — dzwoń kiedy chcesz", is: "Ég bý 5 mínútur í burtu — hringdu hvenær sem er" } },
    ],
  },
  experiences: {
    title: { en: "What's", pl: "Co jest", is: "Hvað er" },
    titleAccent: { en: "out there", pl: "w okolicy", is: "þarna úti" },
    subtitle: {
      en: "The Westfjords are the part of Iceland that most people never reach. That's exactly why you should come. Here's what I recommend.",
      pl: "Fiordy Zachodnie to część Islandii, do której większość ludzi nigdy nie dociera. Właśnie dlatego warto tu przyjechać. Oto co polecam.",
      is: "Vestfirðir eru sá hluti Íslands sem flestir ná aldrei til. Einmitt þess vegna ættirðu að koma. Hér er það sem ég mæli með.",
    },
    items: [
      {
        title: { en: "Northern Lights", pl: "Zorza polarna", is: "Norðurljós" },
        desc: {
          en: "Sep–Mar: No light pollution here. On good nights, the sky turns green right above the hot tub. I'll text you when conditions are right.",
          pl: "Wrz–Mar: Zero zanieczyszczenia światłem. W dobre noce niebo robi się zielone prosto nad hot tubem. Napiszę Ci, gdy warunki będą idealne.",
          is: "Sep–Mar: Engin ljósmengun hér. Á góðum kvöldum verður himinninn grænn rétt yfir heita pottinum. Ég sendi þér skilaboð þegar aðstæður eru góðar.",
        },
        season: { en: "Sep – Mar", pl: "Wrz – Mar", is: "Sep – Mar" },
      },
      {
        title: { en: "Whale Watching", pl: "Obserwacja wielorybów", is: "Hvalaskoðun" },
        desc: {
          en: "Jun–Sep: My friend Jón runs boat trips from Ísafjörður. Humpbacks, orcas, dolphins. 15 minutes from here. Tell him Guðrún sent you.",
          pl: "Cze–Wrz: Mój przyjaciel Jón prowadzi rejsy z Ísafjörður. Humbacki, orki, delfiny. 15 minut stąd. Powiedz, że wysłała Cię Guðrún.",
          is: "Jún–Sep: Vinur minn Jón rekur bátaferðir frá Ísafirði. Hnúfubakur, háhyrningur, höfrungur. 15 mínútur héðan. Segðu honum að Guðrún sendi þig.",
        },
        season: { en: "Jun – Sep", pl: "Cze – Wrz", is: "Jún – Sep" },
      },
      {
        title: { en: "Hiking & Trails", pl: "Trekking i szlaki", is: "Gönguferðir" },
        desc: {
          en: "Hornstrandir is a 2-hour boat ride — no roads, no people, just arctic foxes and cliffs. Dynjandi waterfall is 40 min by car. I have hand-drawn maps of the unmarked trails.",
          pl: "Hornstrandir to 2 godziny łodzią — bez dróg, bez ludzi, tylko lisy polarne i klify. Wodospad Dynjandi to 40 min samochodem. Mam ręcznie rysowane mapy nieoznaczonych szlaków.",
          is: "Hornstrandir er 2 klst sigling — engir vegir, ekkert fólk, bara tófur og björg. Dynjandi foss er 40 mín í bíl. Ég er með handteiknaðar kort af ómerktum leiðum.",
        },
        season: { en: "May – Oct", pl: "Maj – Paź", is: "Maí – Okt" },
      },
      {
        title: { en: "Hot Springs", pl: "Gorące źródła", is: "Heitar laugar" },
        desc: {
          en: "Hellulaug is a natural pool right by the ocean — 30 min drive. Reykjafjarðarlaug is hidden in a valley — I'll show you on the map. Bring a towel and expect to have the place to yourself.",
          pl: "Hellulaug to naturalny basen nad samym oceanem — 30 min jazdy. Reykjafjarðarlaug ukryta w dolinie — pokażę Ci na mapie. Weź ręcznik i nie spodziewaj się nikogo.",
          is: "Hellulaug er náttúrulegur laugur rétt við sjóinn — 30 mín akstur. Reykjafjarðarlaug er falin í dal — ég sýni þér á kortinu. Taktu handklæði og búðu við að vera einn.",
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
      en: "I've lived in the Westfjords my entire life. My grandmother ran a guesthouse here in the 1960s — she called it \"a warm corner at the edge of the world.\" When the last hotel in our village closed, I decided to reopen her doors. Fjallsýn is not a business plan. It's a promise I made to this place. I prepare breakfast from what grows here, and I know every trail, every hot spring, every rock where the puffins nest. As we say — Þetta reddast. It always works out.",
      pl: "Całe życie mieszkam w Fiordach Zachodnich. Moja babcia prowadziła tu pensjonat w latach 60. — nazywała go \"ciepłym kątem na krańcu świata.\" Kiedy ostatni hotel w naszej wiosce zamknął się, postanowiłam otworzyć jej drzwi na nowo. Fjallsýn to nie biznesplan. To obietnica, którą złożyłam temu miejscu. Przygotowuję śniadania z tego, co tu rośnie, i znam każdy szlak, każde gorące źródło, każdą skałę, gdzie gnieżdżą się maskonury. Jak mówimy — Þetta reddast. Zawsze się ułoży.",
      is: "Ég hef búið á Vestfjörðum allt mitt líf. Amma mín rak gistiheimili hér á sjöunda áratugnum — hún kallaði það \"hlýjan horn á jaðri heimsins.\" Þegar síðasta hótelið í þorpinu okkar lokaði ákvað ég að opna dyrnar hennar aftur. Fjallsýn er ekki viðskiptaáætlun. Þetta er loforð sem ég gaf þessum stað. Ég útbý morgunmat úr því sem vex hér og þekki hverja gönguleið, hverja heita laug, hverja klettur þar sem lundinn verpur. Eins og við segjum — Þetta reddast.",
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
          en: "\"One of the best-kept secrets in the Westfjords\"",
          pl: "\"Jeden z najlepiej strzeżonych sekretów Fiordów Zachodnich\"",
          is: "\"Eitt af best varðveittu leyndarmálum Vestfjarða\"",
        },
      },
    ],
  },
  gallery: {
    title: { en: "A few days at", pl: "Kilka dni w", is: "Nokkrir dagar á" },
    titleAccent: { en: "Fjallsýn", pl: "Fjallsýn", is: "Fjallsýn" },
  },
  location: {
    title: { en: "Finding", pl: "Jak do nas", is: "Hvernig á að" },
    titleAccent: { en: "us", pl: "dotrzeć", is: "finna okkur" },
    subtitle: {
      en: "We're remote, but the drive is half the experience. The road through the Westfjords is one of the most beautiful in Europe.",
      pl: "Jesteśmy daleko, ale sama droga to połowa przygody. Trasa przez Fiordy Zachodnie to jedna z najpiękniejszych w Europie.",
      is: "Við erum afskekktur en aksturinn er helmingur upplifunarinnar. Vegurinn um Vestfirði er einn sá fallegasti í Evrópu.",
    },
    airport: {
      label: { en: "Nearest Airport", pl: "Najbliższe lotnisko", is: "Næsti flugvöllur" },
      value: { en: "Ísafjörður (IFJ) — 25 min drive", pl: "Ísafjörður (IFJ) — 25 min jazdy", is: "Ísafjörður (IFJ) — 25 mín akstur" },
    },
    drive: {
      label: { en: "From Reykjavík", pl: "Z Reykjavíku", is: "Frá Reykjavík" },
      value: { en: "~5h via Route 1 & 61 — worth every minute", pl: "~5h trasą nr 1 i 61 — warta każdej minuty", is: "~5 klst um leið 1 og 61 — þess virði hverja mínútu" },
    },
    road: {
      label: { en: "Road Conditions", pl: "Stan dróg", is: "Vegaástand" },
      value: { en: "Paved year-round. Check road.is before winter trips.", pl: "Asfalt cały rok. Sprawdź road.is przed zimowymi podróżami.", is: "Malbikaður allt árið. Athugaðu road.is fyrir vetraferðir." },
    },
    pickup: {
      label: { en: "Need a Ride?", pl: "Potrzebujesz podwózki?", is: "Þarftu far?" },
      value: { en: "I'll pick you up from Ísafjörður airport — just ask", pl: "Odbiorę Cię z lotniska w Ísafjörður — wystarczy zapytać", is: "Ég sæki þig á Ísafjarðarflugvöll — bara spurðu" },
    },
    roadLink: { en: "Check road.is for live conditions", pl: "Sprawdź road.is na żywo", is: "Skoðaðu road.is fyrir ástand" },
    safetravel: { en: "Register your trip at safetravel.is", pl: "Zarejestruj podróż na safetravel.is", is: "Skráðu ferðina á safetravel.is" },
    mapLabel: { en: "View on Google Maps", pl: "Zobacz na Google Maps", is: "Skoða á Google Maps" },
  },
  pricing: {
    title: { en: "Honest", pl: "Uczciwy", is: "Heiðarleg" },
    titleAccent: { en: "Pricing", pl: "cennik", is: "verðlag" },
    subtitle: {
      en: "No algorithms, no dynamic pricing. These are our real prices, the same for everyone. Booking directly is always cheaper than through platforms — because there's no middleman.",
      pl: "Bez algorytmów, bez dynamicznych cen. To nasze prawdziwe ceny, takie same dla wszystkich. Rezerwacja bezpośrednia jest zawsze tańsza niż przez platformy — bo nie ma pośrednika.",
      is: "Engir reiknirit, engar breytilegar verðtölur. Þetta eru raunveruleg verð okkar, þau sömu fyrir alla. Bein bókun er alltaf ódýrari en í gegnum vettvangi — vegna þess að enginn milliliður er.",
    },
    seasons: [
      {
        name: { en: "❄️ Winter", pl: "❄️ Zima", is: "❄️ Vetur" },
        months: { en: "Nov – Mar", pl: "Lis – Mar", is: "Nóv – Mar" },
        eldvorp: "19 900",
        jokull: "14 900",
        note: { en: "Aurora season. Fewer guests, more silence.", pl: "Sezon zorzy. Mniej gości, więcej ciszy.", is: "Norðurljósatímabil. Færri gestir, meiri þögn." },
      },
      {
        name: { en: "🌸 Spring", pl: "🌸 Wiosna", is: "🌸 Vor" },
        months: { en: "Apr – May", pl: "Kwi – Maj", is: "Apr – Maí" },
        eldvorp: "22 900",
        jokull: "17 900",
        note: { en: "Puffins return. Waterfalls at full force.", pl: "Maskonury wracają. Wodospady pełną mocą.", is: "Lundinn kemur aftur. Fossar í fullum krafti." },
      },
      {
        name: { en: "☀️ Summer", pl: "☀️ Lato", is: "☀️ Sumar" },
        months: { en: "Jun – Aug", pl: "Cze – Sie", is: "Jún – Ágú" },
        eldvorp: "29 900",
        jokull: "24 900",
        note: { en: "Midnight sun. It never gets dark. Book early.", pl: "Słońce o północy. Nigdy nie robi się ciemno. Rezerwuj wcześniej.", is: "Miðnætursól. Aldrei verður myrkur. Bókaðu snemma." },
      },
      {
        name: { en: "🍂 Autumn", pl: "🍂 Jesień", is: "🍂 Haust" },
        months: { en: "Sep – Oct", pl: "Wrz – Paź", is: "Sep – Okt" },
        eldvorp: "22 900",
        jokull: "17 900",
        note: { en: "The hills turn gold. My favourite season.", pl: "Wzgórza złocą się. Moja ulubiona pora roku.", is: "Hæðirnar verða gullar. Uppáhalds árstíðin mín." },
      },
    ],
    perNight: { en: "ISK/night", pl: "ISK/noc", is: "ISK/nótt" },
    directSave: { en: "Best price when you book direct", pl: "Najlepsza cena przy rezerwacji bezpośredniej", is: "Besta verðið við beina bókun" },
  },
  faq: {
    title: { en: "Things people", pl: "Często zadawane", is: "Algengar" },
    titleAccent: { en: "ask", pl: "pytania", is: "spurningar" },
    items: [
      {
        q: { en: "Is it good for children?", pl: "Czy to dobre dla dzieci?", is: "Er þetta gott fyrir börn?" },
        a: { en: "Absolutely. The Jökull Room fits families of 4. I have cots, high chairs, and a shelf of children's books. The area is safe — but please watch the little ones near the hot tub.", pl: "Oczywiście. Pokój Jökull pomieści rodziny do 4 osób. Mam łóżeczka, krzesełka i półkę z książkami dla dzieci. Okolica jest bezpieczna — ale prosimy o opiekę nad maluchami przy hot tubie.", is: "Algjörlega. Jökull herbergið rúmar fjölskyldur af 4. Ég er með barnarúm, háa stóla og hillu af barnabókum. Svæðið er öruggt — en passið börnin við heita pottinn." },
      },
      {
        q: { en: "Can I charge my electric car?", pl: "Czy mogę naładować samochód elektryczny?", is: "Get ég hlaðið rafbíl?" },
        a: { en: "Yes — 22kW Type 2 charger, free for all guests. Iceland runs on renewable energy, so charge without guilt.", pl: "Tak — ładowarka 22kW Type 2, bezpłatna dla wszystkich gości. Islandia działa na energii odnawialnej, ładuj bez wyrzutów.", is: "Já — 22kW Type 2 hleðslutæki, ókeypis öllum gestum. Ísland keyrir á endurnýjanlega orku, svo hladdu samviskuhreinlega." },
      },
      {
        q: { en: "What if the weather turns bad?", pl: "Co jeśli pogoda się zepsuje?", is: "Hvað ef veðrið versnar?" },
        a: { en: "Then you light the fireplace, pour a glass of wine, and listen to the wind. The cottage is built for Icelandic storms — thick walls, good heating, board games, and books. Many guests say the storm nights are the most memorable.", pl: "Wtedy rozpalasz kominek, nalewasz kieliszek wina i słuchasz wiatru. Domek jest zbudowany na islandzkie burze — grube ściany, dobre ogrzewanie, gry planszowe i książki. Wielu gości mówi, że burzliwe noce są najlepsze.", is: "Þá kveikir þú í arninum, hellir glasi af víni og hlustar á vindinn. Skálinn er byggður fyrir íslenska storma — þykkir veggir, góð hiting, borðspil og bækur. Margir gestir segja að stormnæturnar séu eftirminnilegustar." },
      },
      {
        q: { en: "Can you help arrange tours?", pl: "Czy możesz pomóc z wycieczkami?", is: "Geturðu hjálpað með ferðir?" },
        a: { en: "That's one of my favourite things to do. Kayaking, fishing, horse riding, glacier walks — I work with local guides I've known for years. Just tell me what interests you.", pl: "To jedno z moich ulubionych zajęć. Kajakowanie, wędkowanie, jazda konna, spacery po lodowcu — współpracuję z lokalnymi przewodnikami, których znam od lat. Po prostu powiedz, co Cię interesuje.", is: "Það er eitt af uppáhalds hlutunum mínum. Siglingar, veiðar, hestamennska, jökulferðir — ég vinn með staðbundnum leiðsögumönnum sem ég hef þekkt í mörg ár. Segðu mér bara hvað vekur áhuga þinn." },
      },
      {
        q: { en: "What's the cancellation policy?", pl: "Jaka jest polityka anulowania?", is: "Hver er afbókunarstefnan?" },
        a: { en: "Free cancellation up to 7 days before. 50% refund within 3–7 days. Under 3 days — no refund, but we'll happily reschedule.", pl: "Bezpłatne anulowanie do 7 dni przed. 50% zwrotu w ciągu 3–7 dni. Poniżej 3 dni — bez zwrotu, ale chętnie przełożymy termin.", is: "Ókeypis afbókun allt að 7 dögum áður. 50% endurgreiðsla innan 3–7 daga. Undir 3 dögum — engin endurgreiðsla, en við endurbókum glaðlega." },
      },
      {
        q: { en: "How do I pay?", pl: "Jak płacić?", is: "Hvernig borga ég?" },
        a: { en: "Card (Visa/Mastercard) or cash in ISK. We settle up when you arrive — no prepayment needed.", pl: "Kartą (Visa/Mastercard) lub gotówką w ISK. Rozliczamy się na miejscu — bez przedpłat.", is: "Korti (Visa/Mastercard) eða reiðufé í ISK. Við gerum upp þegar þú kemur — engin fyrirframgreiðsla." },
      },
    ],
  },
  reviews: {
    title: { en: "What guests", pl: "Co mówią", is: "Hvað segja" },
    titleAccent: { en: "say", pl: "goście", is: "gestir" },
    subtitle: { en: "Real reviews from real people, across platforms", pl: "Prawdziwe opinie prawdziwych ludzi, z różnych platform", is: "Raunverulegar umsagnir frá raunverulegu fólki á mismunandi vettvangi" },
    platforms: {
      booking: { en: "Booking.com", score: "9.4 / 10", reviews: "87" },
      tripadvisor: { en: "TripAdvisor", score: "5.0 / 5", reviews: "24" },
      google: { en: "Google", score: "4.9 / 5", reviews: "16" },
    },
  },
  booking: {
    title: { en: "Ready to", pl: "Gotowy na", is: "Tilbúinn að" },
    titleAccent: { en: "come?", pl: "przyjazd?", is: "koma?" },
    subtitle: {
      en: "Drop me a message or book through a platform — whatever feels right. I'll respond personally within a few hours.",
      pl: "Napisz do mnie lub zarezerwuj przez platformę — jak Ci wygodniej. Odpiszę osobiście w ciągu kilku godzin.",
      is: "Sendu mér skilaboð eða bókaðu í gegnum vettvang — hvað sem hentar þér. Ég svara persónulega innan nokkurra klukkustunda.",
    },
    checkAvailability: { en: "Check availability", pl: "Sprawdź dostępność", is: "Athuga framboð" },
    whatsapp: { en: "Chat on WhatsApp", pl: "Napisz na WhatsApp", is: "Spjallaðu á WhatsApp" },
  },
  contactForm: {
    title: { en: "Write to", pl: "Napisz do", is: "Skrifaðu til" },
    titleAccent: { en: "Guðrún", pl: "Guðrún", is: "Guðrúnar" },
    subtitle: {
      en: "Tell me your dates and I'll check what's available. No automated replies — just me.",
      pl: "Podaj mi swoje daty, a ja sprawdzę co jest wolne. Żadnych automatycznych odpowiedzi — tylko ja.",
      is: "Segðu mér dagsetningarnar og ég athuga hvað er laust. Engin sjálfvirk svör — bara ég.",
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
