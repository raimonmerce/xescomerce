import { Artwork } from '../types';

const artworks: { [id: string]: Artwork } = {
    "GF1": {
        name: "Hot house",
        description: "<i>Hot house</i> és una obra primerenca, amb totes les virtuts i els defectes d’una opera prima, però que apunta molts dels trets formals (cromàtics, espacials) d’obres posteriors. La vaig pintar el segon any de carrera. <br><br> Després d’un primer curs prototípic (iniciàtic, d’aclimatació i descoberta d’una nova ciutat i de molts mons nous), ens vam posar a viure junts, amb l’amic enyoradíssim Ramon Roig, a un piset més petit que la seva pròpia terrassa, però que acabaria sent mític a la Facultat de Belles Arts i a bona part de la Barcelona canalla dels vuitanta: El <i>Ático Kaòtico</i>. <br><br> En aquell reduït espai vaig aprendre bona part del que sé: llegíem, dibuixàvem, tocàvem i escoltàvem música, ballàvem i festejàvem totes les noies que podíem. Tot de forma frenètica, impacient, agosarada i salvatge, com corresponia a l’edat i als temps. A l’àtic era molt més imprescindible el tocadiscs que, posem per cas, la nevera o l’escalfador d’aigua (vam tenir una tele vermella amb potes que va durar -sortosament, crec- quatre dies comptats). <br><br> Hi havia una sèrie de peces que sonaven diversos cops a la setmana, sinó al dia. N’hi ha un bon llistat que requeriria un capítol a part, però si n’haguéssim de triar només una, aquesta seria, sens dubte, <i>A love supreme</i>, del llegendari quartet de John Coltrane (McCoy Tyner, Jimmy Garrison i Elvin Jones).",
        thumbnail: "src/assets/gallery/gransFormats/1.jpg",
        images: ["src/assets/gallery/gransFormats/1.jpg"],
        year: 1984,
        type: "GransFormats",
        dimensions: "150x110",
        technique: "pintura i collage sobre tela"
    },
    "GF2": {
        name: "El meu pare és bomber!",
        description: "<i>El meu pare és bomber!</i> pertanyia a una sèrie de pintures salvatges i naïfs alhora: Poll-policia, Jo vull ser torero! o El dia de la Palma. Tots van ser pintats al terra del Parxis (un annex de la facultat) amb generoses dosis de pintures de drogueria i vernissos. <br><br> Durant els primers anys de Belles Arts vàrem organitzar algunes mostres col·lectives (desinhibides, desgavellades i absolutament heterodoxes, com tocava) a qualsevol racó on ens deixessin penjar l’obra. Un dels llocs que ens va acollir millor va ser l’antic Saló La Fontana, a Bellpuig.",
        thumbnail: "src/assets/gallery/gransFormats/2.jpg",
        images: ["src/assets/gallery/gransFormats/2.jpg"],
        year: 1985,
        type: "GransFormats",
        dimensions: "130x70",
        technique: "acrílica sobre cartró"
    },
    "GF3": {
        name: "Maternitat doble",
        description: "<i>Maternitat doble</i> és una de les primeres grans pintures que vaig vendre. Això vol dir: molt content allavons i ara me’n penedeixo una mica. En una nota de premsa de les que escrivia per a La Xina A.R.T. i que solia encapçalar per cites absolutament falses, que atribuïa entremaliadament a grans pensadors, en vaig dir una que fa referència a aquesta incòmoda sensació i que ara redic per, paradoxalment, concloure aquest escrit: <br><br> Que el arte se pueda vender, de por sí, ya suena a traición. Carlos Argentino Danieri - El porqué de nada. <br><br> A casa no és que hi hagués massa tradició artística. De quadres en teníem un parell o tres: un ram de clavells, un quadret a l’oli de l’ermita d’Ivars, signat per J. Coll, alguna reproducció de caire religiós i un parell de quadres romboidals, de dues negres ballant.",
        thumbnail: "src/assets/gallery/gransFormats/3.jpg",
        images: ["src/assets/gallery/gransFormats/3.jpg"],
        year: 1986,
        type: "GransFormats",
        dimensions: "240x100",
        technique: "acrílica sobre tela"
    },
    "GF4": {
        name: "9 jeró (reconstrucció)",
        description: "<i>9 jeró (reconstrucció)</i> és un gran políptic que vaig pintar en un lloc molt peculiar, un taller en un soterrani del Portal de la Pau. Me’l va aconseguir un altre company inseparable d’aventures, Luís Casado, que també va gestionar l’exposició. El taller tenia una humitat que ja voldrien gaudir-ne gallecs i londinencs. Hi havia diversos nivells i poquíssima llum (gairebé tota de tubs fluorescents). El projecte va ser una reconstrucció bastant fidel del resultat final gràcies a unes velles fotografies.",
        thumbnail: "src/assets/gallery/gransFormats/4.jpg",
        images: ["src/assets/gallery/gransFormats/4.jpg"],
        year: 1994,
        type: "GransFormats",
        dimensions: "400x300",
        technique: "tècnica mixta sobre tela"
    },
    "GF5": {
        name: "El jardí de les delícies",
        description: "<i>El jardí de les delícies</i> és un tríptic que pertany a una continuació de 10 artistes mediterranis a NY, anomenat 1.9910. La vaig pintar amb el pseudònim de Stratos Paleologou. L'obra va ser inspirada pel meu admirat El Bosco, i és una referència evident al seu treball. Es va pintar en un parell de setmanes al menjador de la primera casa on vaig viure a Esplugues, i ara presideix la paret principal de la meva llar actual.",
        thumbnail: "src/assets/gallery/gransFormats/5.jpg",
        images: ["src/assets/gallery/gransFormats/5.jpg"],
        year: 1999,
        type: "GransFormats",
        dimensions: "100x220",
        technique: "acrílica i retolador sobre tela"
    },
    "GF6": {
        name: "La maja simbiótica",
        description: "<i>La maja simbiótica</i> és una anamorfosi subtil de Patty Hearts, com l’hagués pintat i batejat Goya. Vaig posar-li la meva pròpia cara quan cursava segon de Belles Arts. En aquell temps, també vaig crear diversos llibres amb el meu heterònim favorit, Lucien Verneuil, com a protagonista. Aquest projecte literari fals es va desenvolupar dins l'editorial Impropia-Orsay.",
        thumbnail: "src/assets/gallery/gransFormats/6.jpg",
        images: ["src/assets/gallery/gransFormats/6.jpg"],
        year: 1999,
        type: "GransFormats",
        dimensions: "60x125",
        technique: "acrílica sobre tela"
    },
    "GF7": {
        name: "Todos nos llamamos Dalí",
        description: "<i>Todos nos llamamos Dalí</i> és una obra pintada per a l’exposició Grandes Éxitos a La Xina A.R.T. La pintura era una reflexió sobre el venedor d’art, inspirada en Dalí i en la seva relació amb els diners. El títol manllevat d’un film de Fassbinder fa referència a la moralització del destí de l'artista que ven la seva ànima a canvi de riquesa. Aquests temes són tractats amb un humor negre que fa un homenatge a Dalí i Velázquez.",
        thumbnail: "src/assets/gallery/gransFormats/7.jpg",
        images: ["src/assets/gallery/gransFormats/7.jpg"],
        year: 2001,
        type: "GransFormats",
        dimensions: "150x80",
        technique: "acrílica sobre tela"
    },
    "GF8": {
        name: "Salón de tiro de don Samuel Peckinpah",
        description: "<i>Salón de tiro de don Samuel Peckinpah</i> és una peça que vaig fer després de revisar el film Grup salvatge. Aquesta obra és una reflexió sobre el western i la violència cinematogràfica. El passeig-suïcidi final del film va ser una imatge que vaig emprar diverses vegades. El western clàssic és una de les meves grans predileccions cinematogràfiques, especialment pel seu tractament cru i realista.",
        thumbnail: "src/assets/gallery/gransFormats/8.jpg",
        images: ["src/assets/gallery/gransFormats/8.jpg"],
        year: 2001,
        type: "GransFormats",
        dimensions: "100x140",
        technique: "tècnica mixta sobre tela"
    },
    "GF9": {
        name: "El taller del Botero",
        description: "<i>El taller del Botero</i> és una obra que vaig pintar per una exposició col·lectiva a MX espai. Vaig aprofitar l’ocasió per fer una petita crítica al realisme que Botero representa, que m’ha semblat sempre una mica avorrit. La pintura es presenta com una memòria d’infanteses alienes, però amb tocs personals que la vinculen al meu passat.",
        thumbnail: "src/assets/gallery/gransFormats/9.jpg",
        images: ["src/assets/gallery/gransFormats/9.jpg"],
        year: 2001,
        type: "GransFormats",
        dimensions: "180x100",
        technique: "acrílica sobre tela"
    },
    "GF10": {
        name: "La lluita final",
        description: "<i>La lluita final</i> és una obra inspirada pel famós quadre de Pellizza da Volpedo. Vaig fer aquesta pintura com una reflexió sobre la lluita obrera durant el segle XX, transformant-la en una crítica humorística i àcida que acaba en el món del futbol. Aquesta peça es va exposar a la mostra Octubre tinto i va ser la base d'un editorial que vaig escriure per a La Conxinxina.",
        thumbnail: "src/assets/gallery/gransFormats/10.jpg",
        images: ["src/assets/gallery/gransFormats/10.jpg"],
        year: 2002,
        type: "GransFormats",
        dimensions: "100x200",
        technique: "acrílica sobre tela"
    },
        "GF11": {
        name: "Totes direccions 03",
        description: "<i>Totes direccions 03</i> és un quadre intervingut dins el projecte De Gènere degenerat. Vaig intervenir diverses pintures que tenia penjades a casa, de manera que en vaig modificar els significats originals. Aquest projecte va implicar una reflexió sobre el gènere i les percepcions artístiques contemporànies, i va ser realitzat amb l'amiga Nora Ancarola i altres artistes.",
        thumbnail: "src/assets/gallery/gransFormats/11.jpg",
        images: ["src/assets/gallery/gransFormats/11.jpg"],
        year: 2003,
        type: "GransFormats",
        dimensions: "150x90",
        technique: "quadre intervingut"
    },
    "GF12": {
        name: "Les distàncies gastronòmiques",
        description: "<i>Les distàncies gastronòmiques</i> és una obra creada en un moment personal complicat, després d'un debut diabètic, com a resposta a la consciència física d’una nova situació vital. Aquesta peça forma part d’una sèrie anomenada <i>Pintura de guerra</i>, i va ser exposada per primera vegada a Ivars d’Urgell. Va ser una mostra molt personal, la primera individual que feia a casa. L'obra es presenta en un moment de catarsi, després d'una sèrie de jocs plàstics experimentals i de la tornada a la pintura com una forma d’alliberament.",
        thumbnail: "src/assets/gallery/gransFormats/12.jpg",
        images: ["src/assets/gallery/gransFormats/12.jpg"],
        year: 2004,
        type: "GransFormats",
        dimensions: "120x150 cm",
        technique: "tècnica mixta sobre tela"
    },
    "GF13": {
        name: "L’exili dels profetes",
        description: "<i>L’exili dels profetes</i> és una peça que forma part de la mostra <i>Pintures de guerra</i>, exposada a diversos espais, incloent la Xina A.R.T. i Tecla Sala. Aquesta obra, amb un doble que s’utilitzava com a imatge principal de la mostra, té influències de la pirateria, amb una referència explícita a la cançó del Mapa del Tresor de Stevenson. Els títols d'aquesta sèrie són inquietants i poètics, com <i>El far de l’Oest</i>, <i>El desert a les postres</i>, i <i>Les campanades al descampat</i>. Aquesta obra té les influències de René Magritte, amb la seva estranya poètica de titols.",
        thumbnail: "src/assets/gallery/gransFormats/13.jpg",
        images: ["src/assets/gallery/gransFormats/13.jpg"],
        year: 2005,
        type: "GransFormats",
        dimensions: "30x180 cm",
        technique: "tècnica mixta sobre tela"
    },
    "GF14": {
        name: "La vigència dels clàssics",
        description: "<i>La vigència dels clàssics</i> forma part de l’exposició 06, una de les millors exposicions de 2006. La peça revisa els retrats de personatges marginals fets per Velázquez, actualitzant-los per mitjà de personatges contemporanis com Saddam Hussein i Bobby Fischer. Aquesta obra es presenta com una reflexió sobre la rellevància dels clàssics i la manera en què la pintura continua mostrant l’essència humana, per molt que el context canviï.",
        thumbnail: "src/assets/gallery/gransFormats/14.jpg",
        images: ["src/assets/gallery/gransFormats/14.jpg"],
        year: 2005,
        type: "GransFormats",
        dimensions: "150x50 cm cada peça",
        technique: "acrílica sobre tela"
    },
    "GF15": {
        name: "053 El retorn del Hombre Love",
        description: "<i>053 El retorn del Hombre Love</i> forma part de l’exposició Qatar 6, una actualització de la sèrie <i>Pintures de guerra</i>. L'obra reflexiona sobre la simplicitat del dibuix i la pintura com una forma de connectar amb la intimitat de l'artista. Es presenta com un moment de reflexió calmada per entendre millor les dificultats personals i de salut que l'artista estava vivint.",
        thumbnail: "src/assets/gallery/gransFormats/15.jpg",
        images: ["src/assets/gallery/gransFormats/15.jpg"],
        year: 2006,
        type: "GransFormats",
        dimensions: "100x130 cm",
        technique: "acrílica i collage sobre tela"
    },
    "GF16": {
        name: "U.L.E.",
        description: "<i>U.L.E.</i> (Último lugar encontrado) va ser part de l’exposició Qatar 6 i forma part d’un conjunt de peces de gran format que inclouen altres obres de <i>Pintures de guerra</i>. L'obra és una combinació de Duchamp i Gordillo, amb influències musicals i un toc experimental. Va ser exposada en diversos espais, com Can Negre i el Palau Ducal de Medinaceli.",
        thumbnail: "src/assets/gallery/gransFormats/16.jpg",
        images: ["src/assets/gallery/gransFormats/16.jpg"],
        year: 2006,
        type: "GransFormats",
        dimensions: "30x180 cm",
        technique: "tècnica mixta sobre tela"
    },
    "GF17": {
        name: "064 El retaule dels monstres benignes",
        description: "<i>064 El retaule dels monstres benignes</i> es va presentar a l’exposició DrapArt 2011. El títol ve d’un poema de Joan Barceló i rememora les pors infantils i les idees preconcebudes. La peça és un políptic que explora el món fantàstic i inabastable de la infantesa, i va ser exposada en diversos espais com la Sala d’Art Can Negre.",
        thumbnail: "src/assets/gallery/gransFormats/17.jpg",
        images: ["src/assets/gallery/gransFormats/17.jpg"],
        year: 2010,
        type: "GransFormats",
        dimensions: "180x350 cm",
        technique: "tècnica mixta sobre tela i fusta"
    },
    "GF18": {
        name: "El vampir holandès",
        description: "<i>El vampir holandès</i> forma part de la sèrie Els monstres de Frankenstein i es va exposar a La Xina A.R.T. el 2012. Aquesta obra, amb un toc poètic i tragicòmic, es presenta com un intent de salvar la pintura en un moment de crisi de l'art contemporani. Combina caceres, bodegons, retrats i altres registres per crear una nova bellesa a partir d'elements recuperats.",
        thumbnail: "src/assets/gallery/gransFormats/18.jpg",
        images: ["src/assets/gallery/gransFormats/18.jpg"],
        year: 2012,
        type: "GransFormats",
        dimensions: "118x110 cm",
        technique: "tècnica mixta i collage sobre tela"
    },
    "GF19": {
        name: "El Jean Genet sense cap",
        description: "<i>El Jean Genet sense cap</i> es va presentar a l'exposició Els monstres de Frankenstein a La Xina A.R.T. el 2011. Va ser una de les peces més significatives de l'exposició, amb una proposta que rescatava elements de la història i els integrava amb un llenguatge contemporani. L'obra també va ser exposada en la mostra Síntesi 2012.",
        thumbnail: "src/assets/gallery/gransFormats/19.jpg",
        images: ["src/assets/gallery/gransFormats/19.jpg"],
        year: 2012,
        type: "GransFormats",
        dimensions: "125x140 cm",
        technique: "tècnica mixta i collage sobre tela"
    },
    "GF20": {
        name: "La vida amb la Tresa",
        description: "<i>La vida amb la Tresa</i> forma part de l’exposició La Xina Interior, presentada en ocasió de Tallers Oberts 2012. Aquesta obra es va crear per explorar la interioritat dels artistes i el seu procés creatiu, amb una reflexió sobre el motiu personal de les exposicions i les dinàmiques interiors de la creació artística.",
        thumbnail: "src/assets/gallery/gransFormats/20.jpg",
        images: ["src/assets/gallery/gransFormats/20.jpg"],
        year: 2012,
        type: "GransFormats",
        dimensions: "110x130 cm",
        technique: "tècnica mixta i collage sobre tela"
    },
    "GF21": {
        name: "Tot l'Univers conegut (Barrock'n'roll)",
        description: "<i>Tot l'Univers conegut (Barrock'n'roll)</i> és una gran obra que tanca la trilogia iniciada amb L’âge d’or (2009) i Els monstres de Frankenstein (2011). El mural de 5x2 m és una celebració del Barroc, amb influències de la música i la cultura pop, i vol explorar les possibilitats del estil barroc fins a la seva caricatura. L’obra es presenta com una catarsi, on la música de Bach es fusiona amb l'energia del rock’n’roll.",
        thumbnail: "src/assets/gallery/gransFormats/21.jpg",
        images: ["src/assets/gallery/gransFormats/21.jpg"],
        year: 2013,
        type: "GransFormats",
        dimensions: "200x500 cm",
        technique: "mixta i collage sobre tela"
    },
    "GF22": {
        name: "Melvilliada",
        description: "<i>Melvilliada</i> és un projecte que vaig planificar amb el meu estimat amic Ramon Roig, i tots dos sabíem que seria l'últim. Sense dir-nos-ho. Vam triar un tema que ens apassionava: la música, que havia estat una part fonamental de la nostra llarga amistat, des de la nostra versió punk involuntària de *Love for sale* a l'Àtico Kaòtico, amb ell a la trompeta i jo al saxo. Junts, hem viscut desenes de concerts de jazz. Un altre tema va ser la literatura: ell va proposar Dostoievski i jo Calvino. Finalment, vam consensuar Melville. Va ser, malauradament, la seva darrera gran exposició (a La Xina A.R.T.). Cada un va pintar una gran bèstia (ell una tela i jo aquest políptic) i va dibuixar diverses petites històries de navegants. El projecte havia de continuar a Gràcia Territori Sonor, però Ramon no va tenir forces per fer-ho. La mostra es va dir *Melvilliada, contes de mariners*, i la inauguració va coincidir amb una lectura del llibre en més de set idiomes (inclòs el japonès), organitzada pel gran Víctor Nubla i pel director de la llibreria Pequod, de Gràcia, que lamentablement tancava portes amb aquella festa lectora. Ens vam aplegar una vintena de lectors, una colla exòtica i diversa que semblava un club d’esperantistes o una secta de conspiradors intergalàctics. Va ser una experiència immensament gratificant.",
        thumbnail: "src/assets/gallery/gransFormats/22.jpg",
        images: ["src/assets/gallery/gransFormats/22.jpg"],
        year: 2015,
        type: "GransFormats",
        dimensions: "200x240",
        technique: "tècnica mixta i collage sobre tela i fusta"
    },
    //Publicaciones
    "PB1": {
        name: "10 artistes mediterranis a NY",
        description: "<i>10 artistes mediterranis a NY</i> va ser el primer projecte total (complex i complert, que diuen a la meva terra), ja que aplegava diverses variants creatives complementàries, com una pel·lícula o una òpera. Ara en dirien un fake, ja que em vaig inventar nou artistes de països costaners al Mare Nostrum, als que posaven cara alguns dels meus amics i companys més propers. <br><i>Ramon Roig</i>, que acabava de tornar de la Gran Poma després d’una estada de mig any, es va prestar a fer d’esquer (ell era l’artista d’aquí) de l’ham o nansa que havia preparat. Em vaig treure del barret, a més, un crític novaiorquès (<i>el doctor Rodolfo</i>), un galerista italo-americà i la seva galeria, <i>Viaggio</i> (el tiet Manel) i jo em vaig reservar el paper d’una figura incipient, que acabaria fent fortuna (potser massa): <i>el comissari</i>. Tot plegat va ser un pretext engrescador per escriure un catàleg (que va editar i dissenyar exquisidament l’amic <i>Raimon Flos</i>) i crear les nou obres i imaginar la personalitat de cadascun dels artistes. M’hi van ajudar, en parts més tècniques, altres amics, com <i>Xavi Duran</i> materialitzant les fotografies sobre pedra o l’<i>Anna Solé</i>, per a les imatges que il·lustrarien el catàleg. I, torno a repetir, els “artistes”: <i>Aziza Barouk</i>, escultora turca (<i>Montse Colomina</i>), <i>Jaime Burton</i>, escultor conceptual gibraltareny (<i>Mia Ibós</i>), <i>Milena Makavejec</i>, instal·ladora sèrbia (<i>Estrella Loza</i>), <i>Maria Moriarty</i>, instal·ladora maltesa (<i>Meritxell Balcells</i>), <i>Ahmed Bessayà Nouri</i>, cartel·lista tunissià (<i>Josep Patau</i>), <i>Cossimo Noventa</i>, fotògraf sicilià (<i>Rogelio Segura</i>), <i>Stratos Paleologou</i>, pintor xipriota (<i>Raimon Flos</i>, de nou), <i>Noah Reutermann</i>, escultor israelià (<i>Xavier Segura, Veuf</i>), <i>Fatima Rocamadour</i>, poliartista marsellesa, d’origen algerià (<i>Esther Patau</i>) i el <i>Ramon</i>, excels pintor valencià (com a ell mateix).",
        thumbnail: "src/assets/gallery/publicacions/PB1.jpg",
        images: ["src/assets/gallery/publicacions/PB1.jpg"],
        year: 1997,
        type: "Publicacions",
        editor: "Viaggio gallery",
    },
    "PB2": {
        name: "1.99010 (Mil novecientos novena y diez)",
        description: "<i>1.99010. Mil nou-cents noranta-deu</i> es va exposar a la sala García-Nieto de Cornellà (posteriorment Espai Moritz), gràcies a la gestió de l’amic, veí i artista <i>Evaristo Benítez</i>. Per aquesta ocasió, vaig ampliar el nombre d’artistes falsos, de deu a setze. En part convidant autors que també havien treballat amb heterònims: <i>Ramon Roig</i>, <i>Tito Inchaurralde</i>, <i>Jesús Etxarte</i>, <i>Elías Pérez</i> i <i>Agustí Torres</i>. I, per una altra banda, inventant-ne uns quants més per seguir donant voltes a la idea germinal. Van entrar a formar part de la meva família d’heterònims: <i>Miguel Arroba</i>, fotògraf espanyol (<i>Elías Pérez</i>), <i>Alida Lumi</i>, pintora albanesa (<i>Tito Inchaurralde</i>, rostre d’<i>Anna Solé</i>), <i>Steve McQueen</i>, dibuixant irlandès nascut a Formentera (<i>Xavi Creus</i>), <i>Armando Pontes</i>, portuguès (<i>Luiggi Massana</i>, foto de <i>Jesús Etxarte</i>), <i>Alex Pyrgoi</i>, artista grec (<i>Josep Puigmartí</i>, obra d’<i>Agustí Torres</i>), i <i>Lucien Verneuil</i>, pintor francès (amb la meva cara joveneta). Completava el joc una foto amb els nous galeristes novaiorquesos al <i>Museu del Prado</i> (amb <i>Mariví Martínez</i> i el desaparegut <i>Armando Dorrego Fortuny</i>).",
        thumbnail: "src/assets/gallery/publicacions/PB2.jpg",
        images: ["src/assets/gallery/publicacions/PB2.jpg"],
        year: 1999,
        type: "Publicacions",
        editor: "Ajuntament de Cornellà de Llobregat"
    },
    "PB3": {
        name: "X (deu anys de La Xina A.R.T.)",
        description: "Que una colla d’artistes (més de trenta) treballessin plegats durant un parell de lustres semblava impossible! Per celebrar-ho, vam preparar un llibre commemoratiu i una xerrada-col·loqui a <i>La Virreina</i>, Barcelona. Jo vaig tenir l’honor de presentar-lo amb <i>Carles Hac Mor</i>, <i>Agustín Fructuoso</i>, <i>Nora Ancarola</i> i el crític <i>Jeffrey Swartz</i>. Els textos incloïen aportacions d’artistes com <i>Benxamín Álvarez</i> i <i>Antonio Tartas</i>, així com amics externs com <i>Lito Caramés</i> i <i>Sergio Vila-Sanjuan</i>. Les imatges eren creacions dels xinos, amb reportatge fotogràfic de <i>Marc Vilallonga</i>. Van formar part del col·lectiu: <i>Andrés Cobo</i>, <i>Antonio Tartas</i>, <i>Anxo Baranga</i>, <i>Benxamín Álvarez</i>, <i>Carme Garolera</i>, <i>Cruz Rivacoba</i>, <i>David Tarancón</i>, <i>Elisabet Marbres</i>, <i>Ignacio Villares</i>, <i>Jason Cresswell</i>, <i>Jesús Etxarte</i>, <i>Joan Colominas</i>, <i>Joan Pallarés</i>, <i>José Antonio Troya</i>, <i>José Ramón I. Alba</i>, <i>Laura Piñel</i>, <i>Luís Casado</i>, <i>Manuel Ruz</i>, <i>Marc Vilallonga</i>, <i>Nora Ancarola</i>, <i>Pere Pich</i>, <i>Pernille Usterud-Svendsen</i>, <i>Ramon Suau</i>, <i>Ricard Aymar</i>, <i>Santi Erill</i>, <i>Santi Queralt</i>, <i>Sorel Seele</i>, <i>Tito Inchaurralde</i>, <i>Toni Clos</i> i jo mateix.",
        thumbnail: "src/assets/gallery/publicacions/PB3.jpg",
        images: ["src/assets/gallery/publicacions/PB3.jpg"],
        year: 2009,
        type: "Publicacions",
        editor: "La Xina A.R.T., Barcelona"
    },
    "PB4": {
        name: "La Conxinxina",
        description: "<i>La Conxinxina</i> (revista d’arts i assajos) va néixer per deixar memòria escrita i gràfica de les activitats de <i>La Xina A.R.T.</i>, així com per donar espai a la creativitat dels seus membres. Després d’una etapa inicial amb <i>Luís Casado</i>, vaig escriure les notes de premsa mensuals de les exposicions. També escrivien <i>Benxamín</i>, <i>Tito</i> i <i>Toni</i>. En la part gràfica destacaven <i>Marc</i>, <i>Jose</i> i <i>Tito</i>. Vam comptar amb col·laboracions d’artistes (<i>Ramon Roig</i>, <i>Matías Krahn</i>), activistes culturals (<i>Agustín Fructuoso</i>, <i>Nora Ancarola</i>), literats (<i>Bruno Montané</i>, <i>Meritxell Cucurella-Jorba</i>), músics (<i>Carlos Santos</i>, <i>Víctor Nubla</i>) i altres personatges com <i>Ramón Más</i> i <i>Jero Rodríguez</i>. Les entrevistes van ser un punt fort: artistes (<i>Francesc Torres</i>, <i>Joan Fontcuberta</i>), músics (<i>Gorka Benítez</i>, <i>David Pastor</i>, <i>David Xirgu</i>), cineastes (<i>José Luís Guerín</i>, <i>Oriol Ferrer</i>), actors (<i>Ramon Fontseré</i>, <i>Juan Margallo</i>) i molts més.",
        thumbnail: "src/assets/gallery/publicacions/PB4.jpg",
        images: [
            "src/assets/gallery/publicacions/PB4_1.jpg",
            "src/assets/gallery/publicacions/PB4_2.jpg",
            "src/assets/gallery/publicacions/PB4_3.jpg",
            "src/assets/gallery/publicacions/PB4_4.jpg",
            "src/assets/gallery/publicacions/PB4_5.jpg",
            "src/assets/gallery/publicacions/PB4_6.jpg",
            "src/assets/gallery/publicacions/PB4_7.jpg",
        ],
        year: 2010, //"2010-2018", 
        type: "Publicacions",
        editor: "La Xina A.R.T., Barcelona"
    },
    "PB5": {
        name: "Lo Gripau (edició especial 40 anys)",
        description: "<i>Lo Gripau</i> és una revista escolar que es va iniciar durant la meva etapa de batxillerat a l’Institut de Bellpuig. Aquesta edició especial celebra els 40 anys del nostre primer curs de BUP, amb la col·laboració d’antics companys i professors. Vaig dissenyar la revista amb l’ajuda de <i>Teresa Alsina</i>, <i>Toni Granollers</i>, <i>Salvador Miret</i> i <i>Xavier Sans</i>. També hi van participar altres amics i el mestre <i>Enric Vicedo</i>. La publicació recupera l’estètica original i inclou textos, fotografies i il·lustracions que reten homenatge a aquella època.",
        thumbnail: "src/assets/gallery/publicacions/PB5.jpg",
        images: ["src/assets/gallery/publicacions/PB5.jpg"],
        year: 2019,
        type: "Publicacions",
        editor: "Institut Lo Pla d’Urgell, Bellpuig"
    },
    "PB6": {
        name: "El desert químic",
        description: "<i>El desert químic</i> és un projecte que fusiona poesia, arts plàstiques i un llibre, sorgit durant el meu procés de quimioteràpia. Explora la idea de travessar un desert personal, inspirant-se en referències literàries i cinematogràfiques. El llibre compta amb pròlegs de <i>Ceferino Galán</i>, <i>Bruno Montané</i>, <i>Benxamín Álvarez</i> i <i>Luisito Casado</i>. A més, va acompanyat d’exposicions en espais com <i>TPK / Centre Cultural Tecla Sala</i> (L’Hospitalet), <i>Lo Pardal - Fundació Guillem Viladot</i> (Agramunt) i <i>Espai Nivi</i> (Castelló).",
        thumbnail: "src/assets/gallery/publicacions/PB6.jpg",
        images: ["src/assets/gallery/publicacions/PB6.jpg"],
        year: 2022,
        type: "Publicacions",
        editor: "edicions XM, Ivars d’Urgell-Esplugues de Llobregat"
    },
    "PB7": {
        name: "´ (accent tancat)",
        description: "Aquest llibre és una revisió i reordenament de la meva producció artística entre 1983 i 2023. Inclou una selecció d’imatges i textos precedents, provinents de <i>La Conxinxina</i>, notes de premsa i altres fonts. Compta amb pròlegs de l’historiador <i>Joan Maria Minguet Batllori</i> i del director de <i>Lo Pardal</i>, <i>Pau Minguet</i>. En el prefaci, reflexiono sobre la meva trajectòria i el significat de recopilar la meva obra en aquest moment vital.",
        thumbnail: "src/assets/gallery/publicacions/PB7.jpg",
        images: ["src/assets/gallery/publicacions/PB7.jpg"],
        year: 2024,
        type: "Publicacions",
        editor: "edicions XM, Ivars d’Urgell-Esplugues de Llobregat"
    }
  };

export default artworks;