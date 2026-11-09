const ITEMS = [
  {
    "universe": "MCU",
    "title": "Iron Man",
    "year": "2008",
    "type": "Película",
    "description": "Tony Stark construye una armadura y comienza su camino como Iron Man.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "The Incredible Hulk",
    "year": "2008",
    "type": "Película",
    "description": "Bruce Banner busca una cura mientras huye de quienes quieren usar su poder.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Iron Man 2",
    "year": "2010",
    "type": "Película",
    "description": "Tony enfrenta las consecuencias de revelar su identidad.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Thor",
    "year": "2011",
    "type": "Película",
    "description": "El príncipe de Asgard llega a la Tierra y aprende el valor de la humildad.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Captain America: The First Avenger",
    "year": "2011",
    "type": "Película",
    "description": "Steve Rogers se convierte en supersoldado durante la Segunda Guerra Mundial.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "The Avengers",
    "year": "2012",
    "type": "Película",
    "description": "Los héroes más poderosos de la Tierra se reúnen para detener una invasión.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Iron Man 3",
    "year": "2013",
    "type": "Película",
    "description": "Tony Stark enfrenta una amenaza que pone a prueba su identidad.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Thor: The Dark World",
    "year": "2013",
    "type": "Película",
    "description": "Thor intenta impedir que una antigua fuerza sumerja al universo en la oscuridad.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Captain America: The Winter Soldier",
    "year": "2014",
    "type": "Película",
    "description": "Steve descubre una conspiración dentro de S.H.I.E.L.D.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Guardians of the Galaxy",
    "year": "2014",
    "type": "Película",
    "description": "Un grupo de inadaptados protege una poderosa gema.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Avengers: Age of Ultron",
    "year": "2015",
    "type": "Película",
    "description": "Los Vengadores se enfrentan a una inteligencia artificial creada para proteger al mundo.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Ant-Man",
    "year": "2015",
    "type": "Película",
    "description": "Scott Lang aprende a controlar un traje que le permite cambiar de tamaño.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Captain America: Civil War",
    "year": "2016",
    "type": "Película",
    "description": "Los Vengadores se dividen por un acuerdo internacional.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Doctor Strange",
    "year": "2016",
    "type": "Película",
    "description": "Un cirujano descubre las artes místicas y otras dimensiones.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Guardians of the Galaxy Vol. 2",
    "year": "2017",
    "type": "Película",
    "description": "Los Guardianes descubren secretos sobre el pasado de Peter Quill.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Spider-Man: Homecoming",
    "year": "2017",
    "type": "Película",
    "description": "Peter Parker intenta equilibrar la escuela con su vida como héroe.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Thor: Ragnarok",
    "year": "2017",
    "type": "Película",
    "description": "Thor debe escapar de Sakaar y evitar el Ragnarok.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Black Panther",
    "year": "2018",
    "type": "Película",
    "description": "T'Challa regresa a Wakanda para asumir el trono.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Avengers: Infinity War",
    "year": "2018",
    "type": "Película",
    "description": "Thanos busca reunir las Gemas del Infinito.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Ant-Man and the Wasp",
    "year": "2018",
    "type": "Película",
    "description": "Scott y Hope exploran el Reino Cuántico.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Captain Marvel",
    "year": "2019",
    "type": "Película",
    "description": "Carol Danvers descubre su pasado y su conexión con los Skrull.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Avengers: Endgame",
    "year": "2019",
    "type": "Película",
    "description": "Los héroes supervivientes intentan revertir el chasquido.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Spider-Man: Far From Home",
    "year": "2019",
    "type": "Película",
    "description": "Peter viaja por Europa mientras lidia con el legado de Tony Stark.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Black Widow",
    "year": "2021",
    "type": "Película",
    "description": "Natasha se enfrenta a su pasado y a la Habitación Roja.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "year": "2021",
    "type": "Película",
    "description": "Shang-Chi debe confrontar el legado de los Diez Anillos.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Eternals",
    "year": "2021",
    "type": "Película",
    "description": "Un grupo de seres antiguos revela su papel en la historia humana.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Spider-Man: No Way Home",
    "year": "2021",
    "type": "Película",
    "description": "Un hechizo fallido abre la puerta a visitantes de otros universos.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Doctor Strange in the Multiverse of Madness",
    "year": "2022",
    "type": "Película",
    "description": "Strange atraviesa realidades alternativas.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Thor: Love and Thunder",
    "year": "2022",
    "type": "Película",
    "description": "Thor vuelve a la acción junto a Jane Foster.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Black Panther: Wakanda Forever",
    "year": "2022",
    "type": "Película",
    "description": "Wakanda enfrenta una nueva amenaza tras la muerte de T'Challa.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Ant-Man and the Wasp: Quantumania",
    "year": "2023",
    "type": "Película",
    "description": "La familia Lang queda atrapada en el Reino Cuántico.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Guardians of the Galaxy Vol. 3",
    "year": "2023",
    "type": "Película",
    "description": "Los Guardianes emprenden una misión para salvar a Rocket.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "The Marvels",
    "year": "2023",
    "type": "Película",
    "description": "Carol, Monica y Kamala intercambian poderes de manera inesperada.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Deadpool & Wolverine",
    "year": "2024",
    "type": "Película",
    "description": "Dos personajes de universos distintos se cruzan en una aventura multiversal.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Captain America: Brave New World",
    "year": "2025",
    "type": "Película",
    "description": "Sam Wilson asume plenamente el legado del Capitán América.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Thunderbolts*",
    "year": "2025",
    "type": "Película",
    "description": "Un equipo de antihéroes es reunido para una misión peligrosa.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "WandaVision",
    "year": "2021",
    "type": "Serie",
    "description": "Wanda y Vision viven una realidad televisiva que esconde algo extraño.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "The Falcon and the Winter Soldier",
    "year": "2021",
    "type": "Serie",
    "description": "Sam y Bucky enfrentan el mundo después del regreso de la mitad de la población.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Loki",
    "year": "2021–2023",
    "type": "Serie",
    "description": "Una variante de Loki descubre la Autoridad de Variación Temporal.",
    "season": "2 temporadas"
  },
  {
    "universe": "MCU",
    "title": "Hawkeye",
    "year": "2021",
    "type": "Serie",
    "description": "Clint Barton intenta volver a casa mientras conoce a Kate Bishop.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Moon Knight",
    "year": "2022",
    "type": "Serie",
    "description": "Marc Spector convive con distintas identidades y un dios egipcio.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Ms. Marvel",
    "year": "2022",
    "type": "Serie",
    "description": "Kamala Khan descubre sus poderes y su conexión con una historia familiar.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "She-Hulk: Attorney at Law",
    "year": "2022",
    "type": "Serie",
    "description": "Jennifer Walters equilibra su trabajo legal con sus poderes.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Secret Invasion",
    "year": "2023",
    "type": "Serie",
    "description": "Nick Fury descubre una infiltración Skrull en la Tierra.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Echo",
    "year": "2024",
    "type": "Serie",
    "description": "Maya López regresa a su hogar y confronta su pasado.",
    "season": ""
  },
  {
    "universe": "MCU",
    "title": "Agatha All Along",
    "year": "2024",
    "type": "Serie",
    "description": "Agatha Harkness emprende un viaje por el Camino de las Brujas.",
    "season": ""
  },
  {
    "universe": "Marvel Television",
    "title": "Agent Carter",
    "year": "2015–2016",
    "type": "Serie",
    "description": "Peggy Carter trabaja para la SSR en los años posteriores a la guerra.",
    "season": "2 temporadas"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 1",
    "year": "2013–2014",
    "type": "Serie",
    "description": "El equipo de Coulson investiga amenazas extraordinarias.",
    "season": "T1"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 2",
    "year": "2014–2015",
    "type": "Serie",
    "description": "S.H.I.E.L.D. se reconstruye mientras aparecen los Inhumanos.",
    "season": "T2"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 3",
    "year": "2015–2016",
    "type": "Serie",
    "description": "El equipo enfrenta nuevas amenazas y cambios dentro de la organización.",
    "season": "T3"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 4",
    "year": "2016–2017",
    "type": "Serie",
    "description": "Ghost Rider, Life Model Decoys y realidades virtuales ponen a prueba al equipo.",
    "season": "T4"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 5",
    "year": "2017–2018",
    "type": "Serie",
    "description": "Los agentes despiertan en un futuro devastado.",
    "season": "T5"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 6",
    "year": "2019",
    "type": "Serie",
    "description": "El equipo busca a Fitz y enfrenta una amenaza alienígena.",
    "season": "T6"
  },
  {
    "universe": "Marvel Television",
    "title": "Agents of S.H.I.E.L.D. — Temporada 7",
    "year": "2020",
    "type": "Serie",
    "description": "Los agentes viajan por distintas épocas para proteger la historia.",
    "season": "T7"
  },
  {
    "universe": "Marvel Television",
    "title": "Inhumans",
    "year": "2017",
    "type": "Serie",
    "description": "La familia real Inhumana queda separada tras un golpe de Estado.",
    "season": "1 temporada"
  },
  {
    "universe": "Marvel Television",
    "title": "Runaways",
    "year": "2017–2019",
    "type": "Serie",
    "description": "Un grupo de adolescentes descubre que sus padres forman parte de una organización secreta.",
    "season": "3 temporadas"
  },
  {
    "universe": "Marvel Television",
    "title": "Cloak & Dagger",
    "year": "2018–2019",
    "type": "Serie",
    "description": "Tandy y Tyrone descubren poderes conectados entre sí.",
    "season": "2 temporadas"
  },
  {
    "universe": "Marvel Television",
    "title": "Helstrom",
    "year": "2020",
    "type": "Serie",
    "description": "Dos hermanos investigan fuerzas sobrenaturales ligadas a su familia.",
    "season": "1 temporada"
  },
  {
    "universe": "Defenders Saga",
    "title": "Daredevil",
    "year": "2015–2018",
    "type": "Serie",
    "description": "Matt Murdock combate el crimen en Hell's Kitchen mientras ejerce como abogado.",
    "season": "3 temporadas"
  },
  {
    "universe": "Defenders Saga",
    "title": "Jessica Jones",
    "year": "2015–2019",
    "type": "Serie",
    "description": "Una investigadora privada con habilidades extraordinarias enfrenta sus traumas.",
    "season": "3 temporadas"
  },
  {
    "universe": "Defenders Saga",
    "title": "Luke Cage",
    "year": "2016–2018",
    "type": "Serie",
    "description": "Un hombre de piel indestructible protege Harlem.",
    "season": "2 temporadas"
  },
  {
    "universe": "Defenders Saga",
    "title": "Iron Fist",
    "year": "2017–2018",
    "type": "Serie",
    "description": "Danny Rand regresa a Nueva York con el poder del Puño de Hierro.",
    "season": "2 temporadas"
  },
  {
    "universe": "Defenders Saga",
    "title": "The Defenders",
    "year": "2017",
    "type": "Miniserie",
    "description": "Daredevil, Jessica Jones, Luke Cage e Iron Fist unen fuerzas.",
    "season": ""
  },
  {
    "universe": "Defenders Saga",
    "title": "The Punisher",
    "year": "2017–2019",
    "type": "Serie",
    "description": "Frank Castle busca justicia mediante una violenta cruzada.",
    "season": "2 temporadas"
  },
  {
    "universe": "Defenders Saga",
    "title": "Daredevil: Born Again",
    "year": "2025–",
    "type": "Serie",
    "description": "Matt Murdock vuelve a enfrentarse a Wilson Fisk.",
    "season": ""
  },
  {
    "universe": "Spider-Verse",
    "title": "Spider-Man",
    "year": "2002",
    "type": "Película",
    "description": "Peter Parker descubre sus poderes y asume la responsabilidad de ser Spider-Man.",
    "season": "Trilogía de Tobey Maguire"
  },
  {
    "universe": "Spider-Verse",
    "title": "Spider-Man 2",
    "year": "2004",
    "type": "Película",
    "description": "Peter lucha por equilibrar su vida personal con su responsabilidad heroica.",
    "season": "Trilogía de Tobey Maguire"
  },
  {
    "universe": "Spider-Verse",
    "title": "Spider-Man 3",
    "year": "2007",
    "type": "Película",
    "description": "Peter enfrenta nuevos enemigos y el lado oscuro de su poder.",
    "season": "Trilogía de Tobey Maguire"
  },
  {
    "universe": "Spider-Verse",
    "title": "The Amazing Spider-Man",
    "year": "2012",
    "type": "Película",
    "description": "Peter Parker investiga la desaparición de sus padres.",
    "season": "Saga de Andrew Garfield"
  },
  {
    "universe": "Spider-Verse",
    "title": "The Amazing Spider-Man 2",
    "year": "2014",
    "type": "Película",
    "description": "Peter se enfrenta a Electro y a secretos de Oscorp.",
    "season": "Saga de Andrew Garfield"
  },
  {
    "universe": "Spider-Verse",
    "title": "Spider-Man: Into the Spider-Verse",
    "year": "2018",
    "type": "Animación",
    "description": "Miles Morales conoce a otros Spider-People de diferentes dimensiones.",
    "season": ""
  },
  {
    "universe": "Spider-Verse",
    "title": "Spider-Man: Across the Spider-Verse",
    "year": "2023",
    "type": "Animación",
    "description": "Miles viaja por el multiverso arácnido y cuestiona el destino.",
    "season": ""
  },
  {
    "universe": "Spider-Verse",
    "title": "Spider-Man: Beyond the Spider-Verse",
    "year": "Por estrenarse",
    "type": "Animación",
    "description": "Continuación anunciada de la historia de Miles Morales.",
    "season": ""
  },
  {
    "universe": "Sony Universe",
    "title": "Venom",
    "year": "2018",
    "type": "Película",
    "description": "Eddie Brock comparte su cuerpo con un simbionte alienígena.",
    "season": ""
  },
  {
    "universe": "Sony Universe",
    "title": "Venom: Let There Be Carnage",
    "year": "2021",
    "type": "Película",
    "description": "Venom se enfrenta a Carnage.",
    "season": ""
  },
  {
    "universe": "Sony Universe",
    "title": "Morbius",
    "year": "2022",
    "type": "Película",
    "description": "Un científico transforma su enfermedad en una condición vampírica.",
    "season": ""
  },
  {
    "universe": "Sony Universe",
    "title": "Madame Web",
    "year": "2024",
    "type": "Película",
    "description": "Cassandra Webb descubre habilidades para ver posibles futuros.",
    "season": ""
  },
  {
    "universe": "Sony Universe",
    "title": "Venom: The Last Dance",
    "year": "2024",
    "type": "Película",
    "description": "Eddie y Venom enfrentan una amenaza que los persigue.",
    "season": ""
  },
  {
    "universe": "Sony Universe",
    "title": "Kraven the Hunter",
    "year": "2024",
    "type": "Película",
    "description": "Sergei Kravinoff se convierte en un cazador letal.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "X-Men",
    "year": "2000",
    "type": "Película",
    "description": "Los mutantes conviven con una humanidad que les teme.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "X2",
    "year": "2003",
    "type": "Película",
    "description": "Los X-Men deben colaborar con un enemigo para sobrevivir.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "X-Men: The Last Stand",
    "year": "2006",
    "type": "Película",
    "description": "Una cura mutante divide a la comunidad.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "X-Men Origins: Wolverine",
    "year": "2009",
    "type": "Película",
    "description": "La historia de Logan y su pasado militar.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "X-Men: First Class",
    "year": "2011",
    "type": "Película",
    "description": "Charles Xavier y Erik Lehnsherr forman una alianza.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "The Wolverine",
    "year": "2013",
    "type": "Película",
    "description": "Logan viaja a Japón y enfrenta su mortalidad.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "X-Men: Days of Future Past",
    "year": "2014",
    "type": "Película",
    "description": "El futuro y el pasado se conectan para evitar una catástrofe.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "Deadpool",
    "year": "2016",
    "type": "Película",
    "description": "Wade Wilson se convierte en un antihéroe irreverente.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "Logan",
    "year": "2017",
    "type": "Película",
    "description": "Un Logan envejecido protege a una joven mutante.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "Deadpool 2",
    "year": "2018",
    "type": "Película",
    "description": "Deadpool reúne un equipo para proteger a un chico con poderes.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "Dark Phoenix",
    "year": "2019",
    "type": "Película",
    "description": "Jean Grey pierde el control de una fuerza cósmica.",
    "season": ""
  },
  {
    "universe": "X-Men / Fox",
    "title": "The New Mutants",
    "year": "2020",
    "type": "Película",
    "description": "Jóvenes mutantes descubren que la institución donde están no es lo que parece.",
    "season": ""
  },
  {
    "universe": "Fantastic Four",
    "title": "Fantastic Four",
    "year": "2005",
    "type": "Película",
    "description": "Cuatro exploradores adquieren poderes tras una misión espacial.",
    "season": ""
  },
  {
    "universe": "Fantastic Four",
    "title": "Fantastic Four: Rise of the Silver Surfer",
    "year": "2007",
    "type": "Película",
    "description": "La familia fantástica enfrenta una amenaza cósmica.",
    "season": ""
  },
  {
    "universe": "Fantastic Four",
    "title": "Fantastic Four",
    "year": "2015",
    "type": "Película",
    "description": "Una nueva versión de los Cuatro Fantásticos obtiene habilidades extraordinarias.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Blade",
    "year": "1998",
    "type": "Película",
    "description": "Un cazador mitad humano y mitad vampiro combate a los no muertos.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Blade II",
    "year": "2002",
    "type": "Película",
    "description": "Blade se alía con vampiros para enfrentar una nueva especie.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Blade: Trinity",
    "year": "2004",
    "type": "Película",
    "description": "Blade es perseguido mientras busca detener a Drácula.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Daredevil",
    "year": "2003",
    "type": "Película",
    "description": "Matt Murdock combate el crimen en Nueva York.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Elektra",
    "year": "2005",
    "type": "Película",
    "description": "Elektra acepta una misión que pone a prueba su pasado.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "The Punisher",
    "year": "2004",
    "type": "Película",
    "description": "Frank Castle emprende una guerra personal contra el crimen.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Ghost Rider",
    "year": "2007",
    "type": "Película",
    "description": "Johnny Blaze hace un pacto sobrenatural y se convierte en el Motorista Fantasma.",
    "season": ""
  },
  {
    "universe": "Marvel Clásico",
    "title": "Ghost Rider: Spirit of Vengeance",
    "year": "2011",
    "type": "Película",
    "description": "Johnny Blaze intenta controlar la maldición del Motorista Fantasma.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "Spider-Man (1967)",
    "year": "1967–1970",
    "type": "Serie animada",
    "description": "Una de las primeras series animadas del trepamuros.",
    "season": "3 temporadas"
  },
  {
    "universe": "Animación",
    "title": "X-Men: The Animated Series",
    "year": "1992–1997",
    "type": "Serie animada",
    "description": "Los X-Men defienden un mundo que los teme.",
    "season": "5 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Spider-Man (1994)",
    "year": "1994–1998",
    "type": "Serie animada",
    "description": "Peter Parker vive aventuras que conectan a numerosos héroes Marvel.",
    "season": "5 temporadas"
  },
  {
    "universe": "Animación",
    "title": "The Incredible Hulk (1996)",
    "year": "1996–1997",
    "type": "Serie animada",
    "description": "Bruce Banner busca una cura mientras huye del ejército.",
    "season": "2 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Silver Surfer",
    "year": "1998",
    "type": "Serie animada",
    "description": "Norrin Radd recorre el cosmos tras convertirse en Silver Surfer.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "The Avengers: United They Stand",
    "year": "1999–2000",
    "type": "Serie animada",
    "description": "Una formación de Vengadores protege el planeta.",
    "season": "1 temporada"
  },
  {
    "universe": "Animación",
    "title": "X-Men: Evolution",
    "year": "2000–2003",
    "type": "Serie animada",
    "description": "Los mutantes son adolescentes que aprenden a controlar sus poderes.",
    "season": "4 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Spider-Man: The New Animated Series",
    "year": "2003",
    "type": "Serie animada",
    "description": "Una versión animada de Spider-Man ambientada en su etapa universitaria.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "Fantastic Four: World's Greatest Heroes",
    "year": "2006–2010",
    "type": "Serie animada",
    "description": "Los Cuatro Fantásticos enfrentan amenazas científicas y cósmicas.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "The Spectacular Spider-Man",
    "year": "2008–2009",
    "type": "Serie animada",
    "description": "Peter Parker equilibra la adolescencia con su vida como héroe.",
    "season": "2 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Wolverine and the X-Men",
    "year": "2009",
    "type": "Serie animada",
    "description": "Wolverine intenta reunir a los X-Men tras un futuro devastador.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "The Super Hero Squad Show",
    "year": "2009–2011",
    "type": "Serie animada",
    "description": "Versiones cómicas de héroes Marvel viven aventuras para toda la familia.",
    "season": "2 temporadas"
  },
  {
    "universe": "Animación",
    "title": "The Avengers: Earth's Mightiest Heroes",
    "year": "2010–2012",
    "type": "Serie animada",
    "description": "Los Vengadores se unen ante grandes amenazas.",
    "season": "2 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Ultimate Spider-Man",
    "year": "2012–2017",
    "type": "Serie animada",
    "description": "Spider-Man entrena junto a un equipo de jóvenes héroes.",
    "season": "4 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Avengers Assemble",
    "year": "2013–2019",
    "type": "Serie animada",
    "description": "Los Vengadores protegen el mundo de amenazas globales.",
    "season": "5 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Guardians of the Galaxy",
    "year": "2015–2019",
    "type": "Serie animada",
    "description": "Los Guardianes viajan por el espacio enfrentando peligros.",
    "season": "3 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Marvel's Spider-Man",
    "year": "2017–2020",
    "type": "Serie animada",
    "description": "Peter Parker aprende a ser un héroe y científico.",
    "season": "3 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Marvel Rising",
    "year": "2018–2019",
    "type": "Especiales animados",
    "description": "Un equipo de jóvenes heroínas se une para proteger el mundo.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "What If...?",
    "year": "2021–2024",
    "type": "Serie animada",
    "description": "Historias alternativas exploran posibilidades del multiverso.",
    "season": "3 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Hit-Monkey",
    "year": "2021–2024",
    "type": "Serie animada",
    "description": "Un macaco entrenado busca venganza en el mundo criminal.",
    "season": "2 temporadas"
  },
  {
    "universe": "Animación",
    "title": "Moon Girl and Devil Dinosaur",
    "year": "2023–2025",
    "type": "Serie animada",
    "description": "Una joven genio y un dinosaurio rojo protegen Nueva York.",
    "season": "2 temporadas"
  },
  {
    "universe": "Animación",
    "title": "X-Men '97",
    "year": "2024–",
    "type": "Serie animada",
    "description": "Continuación espiritual de la clásica serie de los X-Men.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "LEGO Marvel Super Heroes: Maximum Overload",
    "year": "2013",
    "type": "Animación LEGO",
    "description": "Especial animado con versiones LEGO de los héroes Marvel.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "LEGO Marvel Avengers: Climate Conundrum",
    "year": "2020",
    "type": "Animación LEGO",
    "description": "Los Vengadores protagonizan una aventura en formato LEGO.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "Marvel Anime: Iron Man",
    "year": "2010",
    "type": "Anime",
    "description": "Tony Stark viaja a Japón y desarrolla una armadura especial.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "Marvel Anime: Wolverine",
    "year": "2011",
    "type": "Anime",
    "description": "Logan viaja a Japón para rescatar a Mariko.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "Marvel Anime: X-Men",
    "year": "2011",
    "type": "Anime",
    "description": "Los X-Men investigan un fenómeno mutante en Japón.",
    "season": ""
  },
  {
    "universe": "Animación",
    "title": "Marvel Anime: Blade",
    "year": "2011",
    "type": "Anime",
    "description": "Blade continúa su cacería de vampiros en Asia.",
    "season": ""
  }
];
const colors = {"MCU":"#e62429","Marvel Television":"#d84c3d","Defenders Saga":"#b7a06a","Spider-Verse":"#d83b42","Sony Universe":"#8c72bd","X-Men / Fox":"#5b8db8","Fantastic Four":"#52a7c8","Marvel Clásico":"#a66b42","Animación":"#d58a3c"};
const universeButtons=document.getElementById('universeButtons'), cards=document.getElementById('cards'), search=document.getElementById('search'), typeFilter=document.getElementById('typeFilter'), yearFilter=document.getElementById('yearFilter'), count=document.getElementById('count'), activeLabel=document.getElementById('activeLabel'), empty=document.getElementById('empty');
let selectedUniverse='';
const universes=[...new Set(ITEMS.map(x=>x.universe))];
universeButtons.innerHTML='<button class="universe-btn active" data-universe="">TODOS</button>'+universes.map(u=>'<button class="universe-btn" data-universe="'+u+'">'+u.toUpperCase()+'</button>').join('');
[...new Set(ITEMS.map(x=>(x.year.match(/\d{4}/)||[])[0]).filter(Boolean))].sort().forEach(y=>yearFilter.insertAdjacentHTML('beforeend','<option value="'+y+'">'+y+'</option>'));
function render(){
 const q=search.value.trim().toLowerCase(), t=typeFilter.value, y=yearFilter.value;
 const found=ITEMS.filter(x=>(!selectedUniverse||x.universe===selectedUniverse)&&(!t||x.type===t)&&(!y||x.year.includes(y))&&(!q||[x.title,x.universe,x.year,x.description,x.type].join(' ').toLowerCase().includes(q)));
 count.textContent='('+found.length+' títulos)'; activeLabel.textContent=selectedUniverse?'UNIVERSO: '+selectedUniverse.toUpperCase():'MOSTRANDO TODO EL ARCHIVO';
 cards.innerHTML=found.map(x=>{const idx=ITEMS.indexOf(x);return '<article class="card" data-index="'+idx+'" style="--accent:'+(colors[x.universe]||'#e62429')+'"><div class="card-top"><span class="tag">'+x.universe+'</span><span class="year">'+x.year+'</span></div><div><h3>'+x.title+'</h3><p>'+x.description+'</p></div><div class="card-bottom"><span>'+x.type+(x.season?' · '+x.season:'')+'</span><span class="arrow">↗</span></div></article>'}).join('');
 empty.hidden=found.length!==0;
}
universeButtons.addEventListener('click',e=>{const b=e.target.closest('button[data-universe]');if(!b)return;selectedUniverse=b.dataset.universe;document.querySelectorAll('.universe-btn').forEach(x=>x.classList.toggle('active',x===b));render();document.getElementById('catalogo').scrollIntoView({behavior:'smooth'})});
[search,typeFilter,yearFilter].forEach(x=>x.addEventListener('input',render));
document.getElementById('clearFilters').addEventListener('click',()=>{search.value='';typeFilter.value='';yearFilter.value='';selectedUniverse='';document.querySelectorAll('.universe-btn').forEach((x,i)=>x.classList.toggle('active',i===0));render()});
const modal=document.getElementById('modal');
cards.addEventListener('click',e=>{const card=e.target.closest('.card');if(!card)return;const x=ITEMS[Number(card.dataset.index)];document.getElementById('modalUniverse').textContent=x.universe;document.getElementById('modalTitle').textContent=x.title;document.getElementById('modalYear').textContent=x.year;document.getElementById('modalType').textContent=x.type;document.getElementById('modalSeason').textContent=x.season;document.getElementById('modalDescription').textContent=x.description;modal.classList.add('open');modal.setAttribute('aria-hidden','false')});
modal.addEventListener('click',e=>{if(e.target.hasAttribute('data-close')){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
render();
