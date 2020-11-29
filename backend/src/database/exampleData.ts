export const classes = [
  {
    name: "Jazz",
    description:
      "Jazz jest to taniec zapoczątkowany na przełomie XIX i XX wieku. Zawiera w sobie elementy baletu, tańca modern oraz tańca akrobatycznego, pobudza wyobraźnię. Na zajęciach pracujemy nad techniką, rozciągnięciem a także układamy różnorodne choreografie.",
    groups: [
      { id: "1", day: "Poniedziałek", time: "17:00", level: "P1" },
      { id: "2", day: "Środa", time: "18:00", level: "Z" },
      { id: "3", day: "Czwartek", time: "18:00", level: "S" },
      { id: "4", day: "Piątek", time: "17:00", level: "P1" },
      { id: "5", day: "Sobota", time: "12:00", level: "P2" }
    ],
    imageName: "jazz.jpg"
  },
  {
    name: "Balet",
    description:
      "Balet, zwany też tańcem klasycznym wywodzi się z XVII-wiecznej Francji. Zajęcia polegają głównie na technice baletowej, kształtują sylwetkę, uczą prawidłowej postawy, i elegancji. Obejmują ćwiczenia przy drążku, rozciąganie, naukę klasycznych baletowych kroków i figur.",
    groups: [
      { id: "6", day: "Wtorek", time: "20:00", level: "P1" },
      { id: "10", day: "Środa", time: "16:00", level: "P0" },
      { id: "7", day: "Czwartek", time: "16:00", level: "P2" },
      { id: "8", day: "Piątek", time: "18:00", level: "S" },
      { id: "9", day: "Sobota", time: "11:00", level: "Z" }
    ],
    imageName: "balet.jpg"
  },
  {
    name: "Joga",
    description:
      "Joga to system ćwiczeń fizycznych, umysłowych i oddechowych, pochodzący z Indii. Zajęcia polegają na przyjmowaniu tradycyjnych pozycji, rozciąganiu, przełamywaniu swoich barier. Mają spokojny, relaksujący charakter, świetnie sprawdzają się jako odpoczynek po ciężkim dniu.",
    groups: [
      { id: "11", day: "Poniedziałek", time: "18:00", level: "Open" },
      { id: "12", day: "Wtorek", time: "19:00", level: "S" },
      { id: "13", day: "Środa", time: "19:00", level: "Open" },
      { id: "14", day: "Piątek", time: "19:00", level: "Z" },
      { id: "15", day: "Sobota", time: "9:00", level: "Open" }
    ],
    imageName: "joga.jpg"
  },
  {
    name: "Akrobatyka",
    description:
      "Akrobatyka to zajęcia łączące w sobie elementy akrobatyki sportowej i gimnastyki. Rozwijają podstawowe zdolności motoryczne - siłę, wytrzymałość, zwinność, koordynację ruchową. Na zajęciach wykonujemy takie ćwiczenia jak przewroty, gwiazdy czy stanie na rękach.",
    groups: [
      { id: "16", day: "Środa", time: "17:00", level: "S" },
      { id: "17", day: "Czwartek", time: "20:00", level: "P2" },
      { id: "18", day: "Sobota", time: "11:00", level: "P1" }
    ],
    imageName: "akrobatyka.jpg"
  },
  {
    name: "Contemporary",
    description:
      "Contemporary to taniec oparty na idei baletu, pozbawiony jednak jego sztywnych zasad, w szczególności kładzie nacisk na pokazanie emocji tancerza. Jest to bardzo luźna forma tańca, nie ma ograniczeń tak, jak w balecie - tancerz ma dowolność w kreowaniu ruchu.",
    groups: [
      { id: "19", day: "Poniedziałek", time: "19:00", level: "S" },
      { id: "20", day: "Czwartek", time: "17:00", level: "P1" },
      { id: "21", day: "Piątek", time: "16:00", level: "P2" },
      { id: "22", day: "Sobota", time: "13:00", level: "P0" }
    ],
    imageName: "taniecWspolczesny.jpg"
  },
  {
    name: "Hip hop",
    description:
      "Hip-hop zaliczany jest do tańców ulicznych, i powstał na ulicach Nowego Jorku. Dzieli się na różne odmiany, np. oldschool, new style, new age, freestyle, co czyni go wyjątkowo różnorodnym, a każdy miłośnik tańca znajdzie w nim coś dla siebie.",
    groups: [
      { id: "23", day: "Poniedziałek", time: "16:00", level: "P1" },
      { id: "24", day: "Wtorek", time: "19:00", level: "Z" },
      { id: "25", day: "Czwartek", time: "18:00", level: "P0" },
      { id: "26", day: "Sobota", time: "9:00", level: "S" }
    ],
    imageName: "hipHop.jpg"
  },
  {
    name: "High heels",
    description:
      "High Heels to po prostu taniec na szpilkach. To technika tańca łącząca różne style takie jak dancehall, jazz czy vouging. Na tych zajęciach nauczysz się zmysłowych i kobiecych choreografii, ale też zaczniesz lepiej poruszać się w szpilkach na co dzień.",
    groups: [
      { id: "27", day: "Poniedziałek", time: "19:00", level: "P2" },
      { id: "28", day: "Wtorek", time: "17:00", level: "Z" },
      { id: "29", day: "Czwartek", time: "16:00", level: "P0" },
      { id: "30", day: "Piątek", time: "20:00", level: "S" },
      { id: "31", day: "Sobota", time: "12:00", level: "P1" }
    ],
    imageName: "highHeels.jpg"
  },
  {
    name: "Flamenco",
    description:
      "Taniec flamenco posiada swe korzenie w dawnych religijnych tańcach orientalnych. W dzisiejszej jego postaci dopatrzyć się można wielu elementów tańca hinduskiego, takich jak ruchy ramion, dłoni i palców, a także używanie nóg jako instrumentu perkusyjnego. ",
    groups: [
      { id: "32", day: "Środa", time: "18:00", level: "P0" },
      { id: "33", day: "Piątek", time: "20:00", level: "P2" }
    ],
    imageName: "flamenco.jpg"
  },
  {
    name: "Breakdance",
    description:
      "Break dance jest to rodzaj unikatowego tańca z dużą liczbą elementów siłowo-sprawnościowych, oraz kroków wykonywanych „w parterze”, czyli rękami i nogami lub całym ciałem na ziemi. Na zajęciach pracuje się przede wszystkim nad siłą, sprawnością i poczuciem rytmu.",
    groups: [
      { id: "34", day: "Poniedziałek", time: "17:00", level: "P0" },
      { id: "35", day: "Wtorek", time: "20:00", level: "S" },
      { id: "36", day: "Czwartek", time: "19:00", level: "P1" },
      { id: "37", day: "Sobota", time: "10:00", level: "P2" }
    ],
    imageName: "breakdance.jpg"
  },
  {
    name: "Taniec towarzyski",
    description:
      "Taniec towarzyski to forma rozrywki uprawiana od początku XX wieku. Ma wiele odmian, na zajęciach skupiamy się przede wszystkim na tańcach standardowych takich jak walc, foxtrot czy tango, ale też latynoamerykańskich jak cha-cha, rumba czy samba.",
    groups: [
      { id: "38", day: "Poniedziałek", time: "20:00", level: "Z" },
      { id: "39", day: "Środa", time: "17:00", level: "P1" },
      { id: "40", day: "Piątek", time: "18:00", level: "P2" },
      { id: "41", day: "Sobota", time: "13:00", level: "P0" }
    ],
    imageName: "taniecTowarzyski.jpg"
  },
  {
    name: "Taniec brzucha",
    description:
      "Taniec brzucha to sztuka tańca pochodząca z terenów Bliskiego Wschodu i Afryki Północnej. Taniec ten wykonywany jest głównie (ale nie wyłącznie) przez kobiety. Zajęcia zawierają orientalne choreografie, pracę nad mięśniami brzucha oraz rozwijanie pewności siebie.",
    groups: [
      { id: "42", day: "Środa", time: "19:00", level: "P2" },
      { id: "43", day: "Piątek", time: "16:00", level: "P0" },
      { id: "44", day: "Sobota", time: "14:00", level: "S" }
    ],
    imageName: "taniecBrzucha.jpg"
  },
  {
    name: "Pierwszy taniec",
    description:
      "Pierwszy taniec to zajęcia, które mają na celu przygotowanie pary młodej do pierwszego tańca na weselu. Instruktor układa choreografię pod muzykę i upodobania pary młodej. Uwaga! Tych zajęć nie prowadzimy w formie grupowej, a jedynie indywidualnie.",
    groups: [],
    imageName: "pierwszyTaniec.jpg"
  }
];
