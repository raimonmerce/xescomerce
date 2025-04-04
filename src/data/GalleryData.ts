import { Artwork } from '../types';
import { photos } from '../assets/photos/photos';

const artworks: { [id: string]: Artwork } = {
    //Accions
    "Acc1": {
        name: "Cú Currú Cucú Paloma (C.C.C.P.)",
        description: "assets.description.accions.cccp",
        thumbnail: photos.accions.cccp.cccp1,
        images: [
            photos.accions.cccp.cccp1,
            photos.accions.cccp.cccp2,
            photos.accions.cccp.cccp3,
            photos.accions.cccp.cccp4,
            photos.accions.cccp.cccp5
        ],
        year: 2005,
        type: "accions",
        location: "Barcelona-L’Hospitalet de Llobregat",
        technique: "assets.techniques.accioGastronomia"
    },
    "Acc2": {
        name: "DeLuXe",
        description: "assets.description.accions.deluxe",
        thumbnail: photos.accions.deluxe.deluxe1,
        images: [
            photos.accions.deluxe.deluxe1,
            photos.accions.deluxe.deluxe2,
            photos.accions.deluxe.deluxe3,
            photos.accions.deluxe.deluxe4,
            photos.accions.deluxe.deluxe5
        ],
        year: "2007-2011",
        type: "accions",
        location: "assets.locations.diversosEspais",
        technique: "assets.techniques.duetPerformatic"
    },
    "Acc3": {
        name: "Bienvenido, Mr. Allen",
        description: "assets.description.accions.allen",
        thumbnail: photos.accions.allen.allen1,
        images: [
            photos.accions.allen.allen1,
            photos.accions.allen.allen2,
            photos.accions.allen.allen3,
            photos.accions.allen.allen4,
            photos.accions.allen.allen5
        ],
        year: 2007,
        type: "accions",
        location: "assets.locations.cascAntic",
        technique: "assets.techniques.accioReivindicativa"
    },
    "Acc4": {
        name: "Els 7 samurais",
        description: "assets.description.accions.samurais",
        thumbnail: photos.accions.samurais.samurais1,
        images: [
            photos.accions.samurais.samurais1,
            photos.accions.samurais.samurais2,
            photos.accions.samurais.samurais3,
            photos.accions.samurais.samurais4,
            photos.accions.samurais.samurais5
        ],
        year: 2008,
        type: "accions",
        location: "Festival IVARTS, Ivars d’Urgell"
    },
    "Acc5": {
        name: "Portàtil Self Portrait (P.S.P.)",
        description: "assets.description.accions.psp",
        thumbnail: photos.accions.psp.psp1,
        images: [
            photos.accions.psp.psp1,
            photos.accions.psp.psp2,
            photos.accions.psp.psp3,
            photos.accions.psp.psp4,
            photos.accions.psp.psp5
        ],
        year: 2009,
        type: "accions",
        location: "assets.locations.diversosEspais",
        technique: "assets.techniques.accioMusical"
    },
    "Acc6": {
        name: "Arthur Cravan Solo",
        description: "assets.description.accions.craven",
        thumbnail: photos.accions.craven.craven1,
        images: [
            photos.accions.craven.craven1,
            photos.accions.craven.craven2,
            photos.accions.craven.craven3,
            photos.accions.craven.craven4,
            photos.accions.craven.craven5
        ],
        year: 2009,
        type: "accions",
        location: "Torre Muntadas, El Prat de Llobregat",
        technique: "assets.techniques.accioMusical"
    },
    "Acc7": {
        name: "Bubble Bugle",
        description: "assets.description.accions.bubble",
        thumbnail: photos.accions.bubble.bubble1,
        images: [
            photos.accions.bubble.bubble1,
            photos.accions.bubble.bubble2,
            photos.accions.bubble.bubble3,
            photos.accions.bubble.bubble4,
            photos.accions.bubble.bubble5
        ],
        year: "2010-2012",
        type: "accions",
        location: "assets.locations.diversosEspais",
        technique: "assets.techniques.performanceMusical"
    },
    "Acc8": {
        name: "La marinada no és amiga de les performances",
        description: "assets.description.accions.marinada",
        thumbnail: photos.accions.marinada.marinada1,
        images: [
            photos.accions.marinada.marinada1,
            photos.accions.marinada.marinada2,
            photos.accions.marinada.marinada3,
            photos.accions.marinada.marinada4,
            photos.accions.marinada.marinada5
        ],
        year: 2014,
        type: "accions",
        location: "Festival Delicadeses, El Vilosell",
        technique: "assets.techniques.performanceVisual"
    },
    "Acc9": {
        name: "Deconstruint Beuys o Com la Mort explica Art contemporani a una tortuga de guix",
        description: "assets.description.accions.beuys",
        thumbnail: photos.accions.beuys.beuys1,
        images: [
            photos.accions.beuys.beuys1,
            photos.accions.beuys.beuys2,
            photos.accions.beuys.beuys3,
            photos.accions.beuys.beuys4,
            photos.accions.beuys.beuys5
        ],
        year: 2015,
        type: "accions",
        location: "La Grey, Tarragona"
    },
    "Acc10": {
        name: "Les problemes de la langue / Els problemes del llenguatge",
        description: "assets.description.accions.langue",
        thumbnail: photos.accions.langue.langue1,
        images: [
            photos.accions.langue.langue1,
            photos.accions.langue.langue2,
            photos.accions.langue.langue3,
            photos.accions.langue.langue4,
            photos.accions.langue.langue5
        ],
        year: 2009,
        type: "accions",
        location: "Festival Escaparate, galerie-vitirne 4,Barbier, Nîmes",
    },
    //Cartells
    "Cart1": {
        name: "Lovecraft a Hollywood",
        description: "assets.description.cartells.car1",
        thumbnail: photos.cartells.cartell1,
        year: 1987,
        type: "cartells"
    },
    "Cart2": {
        name: "Expoxesco",
        description: "assets.description.cartells.car2",
        thumbnail: photos.cartells.cartell2,
        year: 2007,
        type: "cartells",
    },
    "Cart3": {
        name: "Diccionari de miralls",
        description: "assets.description.cartells.car3",
        thumbnail: photos.cartells.cartell3,
        year: 2012,
        type: "cartells",
    },
    "Cart4": {
        name: "Ultraroig-Imfravioleta",
        description: "assets.description.cartells.car4",
        thumbnail: photos.cartells.cartell4,
        year: 2014,
        type: "cartells",
    },
    "Cart5": {
        name: "Borntubialaif",
        description: "assets.description.cartells.car5",
        thumbnail: photos.cartells.cartell5,
        year: 2015,
        type: "cartells",
    },
    "Cart6": {
        name: "Melvilliada",
        description: "assets.description.cartells.car6",
        thumbnail: photos.cartells.cartell6,
        year: 2015,
        type: "cartells",
    },
    "Cart7": {
        name: "Melvilliada (contes de navegants)",
        description: "assets.description.cartells.car7",
        thumbnail: photos.cartells.cartell7,
        year: 2015,
        type: "cartells",
    },
    "Cart8": {
        name: "Les meravelles de l’Univers",
        description: "assets.description.cartells.car8",
        thumbnail: photos.cartells.cartell8,
        year: 2018,
        type: "cartells",
    },
    "Cart9": {
        name: "DeSignis",
        description: "assets.description.cartells.car9",
        thumbnail: photos.cartells.cartell9,
        year: 2021,
        type: "cartells",
    },
    "Cart10": {
        name: "Terra de profetes",
        description: "assets.description.cartells.car10",
        thumbnail: photos.cartells.cartell10,
        year: 2023,
        type: "cartells",
    },
    //Escultures
    "Esc1": {
        name: "M",
        description: "assets.description.escultures.m",
        thumbnail: photos.escultura.m.m1,
        images: [
            photos.escultura.m.m1,
            photos.escultura.m.m2,
            photos.escultura.m.m3,
            photos.escultura.m.m4,
            photos.escultura.m.m5
        ],
        year: 1998,
        type: "escultures",
        dimensions: "400x250x20 cm",
        technique: "assets.techniques.ferroHeura"
    },
    "Esc2": {
        name: "Galop",
        description: "assets.description.escultures.galop",
        thumbnail: photos.escultura.galop.galop1,
        images: [
            photos.escultura.galop.galop1,
            photos.escultura.galop.galop2,
            photos.escultura.galop.galop3,
            photos.escultura.galop.galop4,
            photos.escultura.galop.galop5
        ],
        year: 1999,
        type: "escultures",
        dimensions: "50x100x50 cm",
        technique: "assets.techniques.futaFerroFormigo"
    },
    "Esc3": {
        name: "Lleixiu llibres",
        description: "assets.description.escultures.lleixiu",
        thumbnail: photos.escultura.lleixiu.lleixiu1,
        images: [
            photos.escultura.lleixiu.lleixiu1,
            photos.escultura.lleixiu.lleixiu2,
            photos.escultura.lleixiu.lleixiu3,
            photos.escultura.lleixiu.lleixiu4,
            photos.escultura.lleixiu.lleixiu5
        ],
        year: 2001,
        type: "escultures",
        dimensions: "30x22x16 cm",
        technique: "assets.techniques.paperPlastic"
    },
    "Esc4": {
        name: "Equipatge essencial",
        description: "assets.description.escultures.arca",
        thumbnail: photos.escultura.arca.arca1,
        images: [
            photos.escultura.arca.arca1,
            photos.escultura.arca.arca2
        ],
        year: 2001,
        type: "escultures",
        dimensions: "65x100x45 cm",
        technique: "assets.techniques.fustaMetallPlastic"
    },
    "Esc5": {
        name: "Pàtria",
        description: "assets.description.escultures.sabates",
        thumbnail: photos.escultura.sabates.sabates1,
        images: [
            photos.escultura.sabates.sabates1,
            photos.escultura.sabates.sabates2,
            photos.escultura.sabates.sabates3
        ],
        year: 2002,
        type: "escultures",
        dimensions: "20x33x7 cm",
        technique: "assets.techniques.cuirPlasticMetall"
    },
    "Esc6": {
        name: "L’Âge d’or",
        description: "assets.description.escultures.age",
        thumbnail: photos.escultura.age.age1,
        images: [
            photos.escultura.age.age1,
            photos.escultura.age.age2,
            photos.escultura.age.age3,
            photos.escultura.age.age4,
            photos.escultura.age.age5
        ],
        year: 2009,
        type: "escultures",
        dimensions: "~20 a 135 cm",
        technique: "assets.techniques.trobat"
    },
    "Esc7": {
        name: "Poemòria",
        description: "assets.description.escultures.poemari",
        thumbnail: photos.escultura.poemari.poemari1,
        images: [
            photos.escultura.poemari.poemari1,
            photos.escultura.poemari.poemari2,
            photos.escultura.poemari.poemari3,
            photos.escultura.poemari.poemari4,
            photos.escultura.poemari.poemari5
        ],
        year: 2008,
        type: "escultures",
        dimensions: "10x40x10 cm",
        technique: "assets.techniques.llibresIntervinguts"
    },
    "Esc8": {
        name: "Artistaman",
        description: "assets.description.escultures.artistaman",
        thumbnail: photos.escultura.artistaman.artistaman1,
        images: [
            photos.escultura.artistaman.artistaman1,
            photos.escultura.artistaman.artistaman2,
            photos.escultura.artistaman.artistaman3,
            photos.escultura.artistaman.artistaman4,
            photos.escultura.artistaman.artistaman5
        ],
        year: 2008,
        type: "escultures",
        dimensions: "30x20x5 cm",
        technique: "assets.techniques.infografiaCartro"
    },
    "Esc9": {
        name: "La crida del bosc",
        description: "assets.description.escultures.crida",
        thumbnail: photos.escultura.crida.crida1,
        images: [
            photos.escultura.crida.crida1,
            photos.escultura.crida.crida2,
            photos.escultura.crida.crida3,
            photos.escultura.crida.crida4,
            photos.escultura.crida.crida5
        ],
        year: 2019,
        type: "escultures",
        dimensions: "170x50x50 cm",
        technique: "assets.techniques.metallBanya"
    },
    "Esc10": {
        name: "El pijama de les postres",
        description: "assets.description.escultures.m",
        thumbnail: photos.escultura.dormida.dormida1,
        images: [
            photos.escultura.dormida.dormida1,
            photos.escultura.dormida.dormida2,
            photos.escultura.dormida.dormida3,
            photos.escultura.dormida.dormida4,
            photos.escultura.dormida.dormida5
        ],
        year: 2023,
        type: "escultures",
        dimensions: "200x70x50 cm",
        technique: "assets.techniques.collagePintura"
    },
    //Experiments

    //GransFormats
    "GF1": {
        name: "L’exili dels profetes",
        description: "assets.description.gransformats.gf1",
        thumbnail: photos.gransFormats.gf1.gf1,
        images: [
            photos.gransFormats.gf1.gf1,
            photos.gransFormats.gf1.gf1a,
            photos.gransFormats.gf1.gf1b,
            photos.gransFormats.gf1.gf1c,
            photos.gransFormats.gf1.gf1d
        ],
        year: 2005,
        type: "gransformats",
        dimensions: "30x180 cm",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF2": {
        name: "064 El retaule dels monstres benignes",
        description: "assets.description.gransformats.gf2",
        thumbnail: photos.gransFormats.gf2.gf2,
        year: 2010,
        type: "gransformats",
        dimensions: "180x350 cm",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF3": {
        name: "El Jean Genet sense cap",
        description: "assets.description.gransformats.gf3",
        thumbnail: photos.gransFormats.gf3.gf3,
        images: [
            photos.gransFormats.gf3.gf3,
            photos.gransFormats.gf3.gf3a,
            photos.gransFormats.gf3.gf3b,
            photos.gransFormats.gf3.gf3c,
            photos.gransFormats.gf3.gf3d
        ],
        year: 2012,
        type: "gransformats",
        dimensions: "125x140 cm",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF4": {
        name: "Tot l'Univers conegut (Barrock'n'roll)",
        description: "assets.description.gransformats.gf4",
        thumbnail: photos.gransFormats.gf4.gf4,
        year: 2013,
        type: "gransformats",
        dimensions: "200x500 cm",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF5": {
        name: "Melvilliada",
        description: "assets.description.gransformats.gf5",
        thumbnail: photos.gransFormats.gf5.gf5,
        year: 2015,
        type: "gransformats",
        dimensions: "200x240",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF6": {
        name: "L'ofensiva del Tet",
        description: "assets.description.gransformats.gf6",
        thumbnail: photos.gransFormats.gf6.gf6,
        images: [
            photos.gransFormats.gf6.gf6,
            photos.gransFormats.gf6.gf6a,
            photos.gransFormats.gf6.gf6b,
            photos.gransFormats.gf6.gf6c,
            photos.gransFormats.gf6.gf6d
        ],
        year: 2016,
        type: "gransformats",
        dimensions: "200x240",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF7": {
        name: "Gran díptic americà",
        description: "assets.description.gransformats.gf7",
        thumbnail: photos.gransFormats.gf7.gf7,
        year: 2018,
        type: "gransformats",
        dimensions: "180x100",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF8": {
        name: "Paco Mercé, obra complerta",
        description: "assets.description.gransformats.gf8",
        thumbnail: photos.gransFormats.gf8.gf8,
        year: 2018,
        type: "gransformats",
        dimensions: "300x500",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF9": {
        name: "Ritme de contagi (Pintura ballable) 01",
        description: "assets.description.gransformats.gf9",
        thumbnail: photos.gransFormats.gf9.gf9,
        images: [
            photos.gransFormats.gf9.gf9,
            photos.gransFormats.gf9.gf9a,
            photos.gransFormats.gf9.gf9b,
            photos.gransFormats.gf9.gf9c,
            photos.gransFormats.gf9.gf9d
        ],
        year: "2020-23",
        type: "gransformats",
        dimensions: "170x150",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    "GF10": {
        name: "La meva zona de John Ford 02",
        description: "assets.description.gransformats.gf10",
        thumbnail: photos.gransFormats.gf10.gf10,
        images: [
            photos.gransFormats.gf10.gf10,
            photos.gransFormats.gf10.gf10a,
            photos.gransFormats.gf10.gf10b,
            photos.gransFormats.gf10.gf10c
        ],
        year: 2023,
        type: "gransformats",
        dimensions: "200 cm de diàmetre",
        technique: "assets.techniques.tecnicaMixtaTela"
    },
    //Instalacions
    "Ins1": {
        name: "El teorema de Parkinson-Richter",
        description: "assets.description.instalacions.flams",
        thumbnail: photos.instalacions.flams.flams1,
        images: [
            photos.instalacions.flams.flams1,
            photos.instalacions.flams.flams2,
            photos.instalacions.flams.flams3,
            photos.instalacions.flams.flams4,
            photos.instalacions.flams.flams5
        ],
        year: 1999,
        type: "instalacions",
        location: "NewArt, Hotel Barceló-Sants",
    },
    "Ins2": {
        name: "El basar del Xino",
        description: "assets.description.instalacions.basar",
        thumbnail: photos.instalacions.basar.basar1,
        images: [
            photos.instalacions.basar.basar1,
            photos.instalacions.basar.basar2,
            photos.instalacions.basar.basar3,
            photos.instalacions.basar.basar4,
            photos.instalacions.basar.basar5
        ],
        year: 2005,
        type: "instalacions",
        location: "La Xina A.R.T., Barcelona",
    },
    "Ins3": {
        name: "Què ve l’Home boig!",
        description: "assets.description.instalacions.boig",
        thumbnail: photos.instalacions.boig.boig1,
        images: [
            photos.instalacions.boig.boig1,
            photos.instalacions.boig.boig2,
            photos.instalacions.boig.boig3,
            photos.instalacions.boig.boig4,
            photos.instalacions.boig.boig5
        ],
        year: 1999,
        type: "instalacions",
        location: "La Xina A.R.T., Barcelona",
    },
    "Ins4": {
        name: "Ombres de La Xina",
        description: "assets.description.instalacions.ombres",
        thumbnail: photos.instalacions.ombres.ombres1,
        images: [
            photos.instalacions.ombres.ombres1,
            photos.instalacions.ombres.ombres2,
            photos.instalacions.ombres.ombres3,
            photos.instalacions.ombres.ombres4,
            photos.instalacions.ombres.ombres5
        ],
        year: "2019-2022",
        type: "instalacions",
        location: "La Xina A.R.T., Barcelona",
    },
    "Ins5": {
        name: "Art domèstic",
        description: "assets.description.instalacions.domestic",
        thumbnail: photos.instalacions.domestic.domestic1,
        images: [
            photos.instalacions.domestic.domestic1,
            photos.instalacions.domestic.domestic2,
            photos.instalacions.domestic.domestic3,
            photos.instalacions.domestic.domestic4,
            photos.instalacions.domestic.domestic5
        ],
        year: "2010 & 2012",
        type: "instalacions",
        location: "La Xina A.R.T., Barcelona & Espai Moritz, Cornella de Llobregat",
    },
    "Ins6": {
        name: "La casa museu",
        description: "assets.description.instalacions.casa",
        thumbnail: photos.instalacions.casa.casa1,
        images: [
            photos.instalacions.casa.casa1,
            photos.instalacions.casa.casa2,
            photos.instalacions.casa.casa3,
            photos.instalacions.casa.casa4,
            photos.instalacions.casa.casa5
        ],
        year: 2011,
        type: "instalacions",
        dimensions: "300x400x400 cm",
    },
    "Ins7": {
        name: "Qui pensa ara en el mar",
        description: "assets.description.instalacions.mar",
        thumbnail: photos.instalacions.mar.mar1,
        images: [
            photos.instalacions.mar.mar1,
            photos.instalacions.mar.mar2,
            photos.instalacions.mar.mar3,
            photos.instalacions.mar.mar4,
            photos.instalacions.mar.mar5
        ],
        year: 1999,
        type: "instalacions",
    },
    "Ins8": {
        name: "Les guerres púniques (o punkies)",
        description: "assets.description.instalacions.puniques",
        thumbnail: photos.instalacions.puniques.puniques1,
        images: [
            photos.instalacions.puniques.puniques1,
            photos.instalacions.puniques.puniques2,
            photos.instalacions.puniques.puniques3,
            photos.instalacions.puniques.puniques4,
            photos.instalacions.puniques.puniques5
        ],
        year: 2018,
        type: "instalacions",
        dimensions: "210x1500 cm"
    },
    "Ins9": {
        name: "Ànimes de càntir",
        description: "assets.description.instalacions.animes",
        thumbnail: photos.instalacions.animes.animes1,
        images: [
            photos.instalacions.animes.animes1,
            photos.instalacions.animes.animes2,
            photos.instalacions.animes.animes3,
            photos.instalacions.animes.animes4,
            photos.instalacions.animes.animes5
        ],
        year: 2019,
        type: "instalacions",
        location: "TPK, L’Hospitalet de Llobregat",
    },
    "Ins10": {
        name: "Ostentació, lluites, abús, simbologia, vuit, dinàmiques i eròtica del poder",
        description: "assets.description.instalacions.poder",
        thumbnail: photos.instalacions.poder.poder1,
        images: [
            photos.instalacions.poder.poder1,
            photos.instalacions.poder.poder2,
            photos.instalacions.poder.poder3,
            photos.instalacions.poder.poder4,
            photos.instalacions.poder.poder5
        ],
        year: 2024,
        type: "instalacions",
        location: "X festival Embarrat, Can Trepat, Tàrrega",
    },

    //Murals
    "Mur1": {
        name: "La pilota automàtica",
        description: "assets.description.murals.flams",
        thumbnail: photos.murals.pilota.pilota1,
        images: [
            photos.murals.pilota.pilota1,
            photos.murals.pilota.pilota2,
            photos.murals.pilota.pilota3,
            photos.murals.pilota.pilota4,
            photos.murals.pilota.pilota5
        ],
        year: 1995,
        type: "murals",
        location: "Hotel Estela-Barcelona, Sitges",
    },
    "Mur2": {
        name: "A.I.G.U.A",
        description: "assets.description.murals.aigua",
        thumbnail: photos.murals.aigua.aigua1,
        images: [
            photos.murals.aigua.aigua1,
            photos.murals.aigua.aigua2,
            photos.murals.aigua.aigua3,
            photos.murals.aigua.aigua4,
            photos.murals.aigua.aigua5
        ],
        year: 2007,
        type: "murals",
        location: "Spa Reneix, Mollerussa",
    },
    "Mur3": {
        name: "The Xina Jazz Machine",
        description: "assets.description.murals.txjm",
        thumbnail: photos.murals.txjm.txjm1,
        images: [
            photos.murals.txjm.txjm1,
            photos.murals.txjm.txjm2,
            photos.murals.txjm.txjm3,
            photos.murals.txjm.txjm4,
            photos.murals.txjm.txjm5
        ],
        year: 2010,
        type: "murals",
        location: "Galerie 4, Barbier, Nîmes",
    },
    "Mur4": {
        name: "Anatomia comparada",
        description: "assets.description.murals.anatomia",
        thumbnail: photos.murals.anatomia.anatomia1,
        images: [
            photos.murals.anatomia.anatomia1,
            photos.murals.anatomia.anatomia2,
            photos.murals.anatomia.anatomia3,
            photos.murals.anatomia.anatomia4,
            photos.murals.anatomia.anatomia5
        ],
        year: 2010,
        type: "murals",
        location: "La Xina A.R.T., Barcelona",
    },
    "Mur5": {
        name: "...i els reis ens portaran carbó",
        description: "assets.description.murals.carbo",
        thumbnail: photos.murals.carbo.carbo1,
        images: [
            photos.murals.carbo.carbo1,
            photos.murals.carbo.carbo2,
            photos.murals.carbo.carbo3,
            photos.murals.carbo.carbo4,
            photos.murals.carbo.carbo5
        ],
        year: 2015,
        type: "murals",
        location: "La Xina A.R.T., Barcelona",
    },

    //Publicaciones
    "Pub1": {
        name: "10 artistes mediterranis a NY",
        description: "assets.publicacions.pub1",
        thumbnail: photos.publicacions.pub1,
        year: 1997,
        type: "publicacions",
        editor: "Viaggio gallery",
    },
    "Pub2": {
        name: "La Conxinxina",
        description: "assets.publicacions.pub2",
        thumbnail: photos.publicacions.pub2,
        images: [
            photos.publicacions.pub2_2,
            photos.publicacions.pub2_3,
            photos.publicacions.pub2_4,
            photos.publicacions.pub2_6,
            photos.publicacions.pub2_7
        ],
        year: "2010-2018", 
        type: "publicacions",
        editor: "La Xina A.R.T., Barcelona"
    },
    "Pub3": {
        name: "Lo Gripau (edició especial 40 anys)",
        description: "assets.publicacions.pub3",
        thumbnail: photos.publicacions.pub3,
        year: 2019,
        type: "publicacions",
        editor: "Institut Lo Pla d’Urgell, Bellpuig"
    },
    "Pub4": {
        name: "El desert químic",
        description: "assets.publicacions.pub4",
        thumbnail: photos.publicacions.pub4,
        year: 2022,
        type: "publicacions",
        editor: "edicions XM, Ivars d’Urgell-Esplugues de Llobregat"
    },
    "Pub5": {
        name: "´ (accent tancat)",
        description: "assets.publicacions.pub5",
        thumbnail: photos.publicacions.pub5,
        year: 2024,
        type: "publicacions",
        editor: "edicions XM, Ivars d’Urgell-Esplugues de Llobregat"
    },

    //Series
    "Ser1": {
        name: "L’exili dels profetes",
        description: "assets.description.series.xove",
        thumbnail: photos.series.xove.xove1,
        images: [
            photos.series.xove.xove1,
            photos.series.xove.xove2,
            photos.series.xove.xove3,
            photos.series.xove.xove4,
            photos.series.xove.xove5
        ],
        year: 1995,
        type: "series",
        dimensions: "~30x70 cm",
        technique: "assets.techniques.llapisTintesCollage"
    },
    "Ser2": {
        name: "Standards",
        description: "assets.description.series.standards",
        thumbnail: photos.series.standards.standards1,
        images: [
            photos.series.standards.standards1,
            photos.series.standards.standards2,
            photos.series.standards.standards3,
            photos.series.standards.standards4,
            photos.series.standards.standards5
        ],
        year: 1996,
        type: "series",
        dimensions: "60x40 cm",
        technique: "Dibuix i collage sobre paper"
    },
    "Ser3": {
        name: "La tauromàquina",
        description: "assets.description.series.tauro",
        thumbnail: photos.series.tauro.tauro1,
        images: [
            photos.series.tauro.tauro1,
            photos.series.tauro.tauro2,
            photos.series.tauro.tauro3,
            photos.series.tauro.tauro4,
            photos.series.tauro.tauro5
        ],
        year: 1995,
        type: "series",
        dimensions: "60x40 cm",
        technique: "Tècnica mixta i collage sobre cartró"
    },
    "Ser4": {
        name: "Le Nouveau Dictionnaire Crusoe",
        description: "assets.description.series.crusoe",
        thumbnail: photos.series.crusoe.crusoe1,
        images: [
            photos.series.crusoe.crusoe1,
            photos.series.crusoe.crusoe2,
            photos.series.crusoe.crusoe3,
            photos.series.crusoe.crusoe4,
            photos.series.crusoe.crusoe5
        ],
        year: 2000,
        type: "series",
        dimensions: "25x25 cm",
        technique: "assemblatges sobre fusta"
    },
    "Ser5": {
        name: "Diccionari de miralls",
        description: "assets.description.series.diccionari",
        thumbnail: photos.series.diccionari.diccionari1,
        images: [
            photos.series.diccionari.diccionari1,
            photos.series.diccionari.diccionari2,
            photos.series.diccionari.diccionari3,
            photos.series.diccionari.diccionari4,
            photos.series.diccionari.diccionari5
        ],
        year: 2012,
        type: "series",
        dimensions: "mides diverses",
        technique: "collages sobre plàstic i fusta"
    },
    "Ser6": {
        name: "Melvilliada",
        description: "assets.description.series.melville",
        thumbnail: photos.series.melville.melville1,
        images: [
            photos.series.melville.melville1,
            photos.series.melville.melville2,
            photos.series.melville.melville3,
            photos.series.melville.melville4,
            photos.series.melville.melville5
        ],
        year: 2015,
        type: "series",
        dimensions: "~22x65 cm",
        technique: "Tècnica mixta i collage sobre paper"
    },
    "Ser7": {
        name: "Ictionari",
        description: "assets.description.series.ictio",
        thumbnail: photos.series.ictio.ictio1,
        images: [
            photos.series.ictio.ictio1,
            photos.series.ictio.ictio2,
            photos.series.ictio.ictio3,
            photos.series.ictio.ictio4,
            photos.series.ictio.ictio5
        ],
        year: 2021,
        type: "series",
        dimensions: "30x30 cm",
        technique: "Collage sobre paper"
    },
    "Ser8": {
        name: "Les meravelles de l’univers",
        description: "assets.description.series.univers",
        thumbnail: photos.series.univers.univers1,
        images: [
            photos.series.univers.univers1,
            photos.series.univers.univers2,
            photos.series.univers.univers3,
            photos.series.univers.univers4,
            photos.series.univers.univers5
        ],
        year: 2018,
        type: "series",
        dimensions: "30x70 cm",
        technique: "Mixta sobre àlbum de cromos"
    },
    "Ser9": {
        name: "Miralls tatuats",
        description: "assets.description.series.tatuats",
        thumbnail: photos.series.tatuats.tatuats1,
        images: [
            photos.series.tatuats.tatuats1,
            photos.series.tatuats.tatuats2,
            photos.series.tatuats.tatuats3,
            photos.series.tatuats.tatuats4,
            photos.series.tatuats.tatuats5
        ],
        year: 2022,
        type: "series",
        dimensions: "22x22 cm",
        technique: "Retoladors i collage sobre plàstic"
    },
    "Ser10": {
        name: "Paperama",
        description: "assets.description.series.paperama",
        thumbnail: photos.series.paperama.paperama1,
        images: [
            photos.series.paperama.paperama1,
            photos.series.paperama.paperama2,
            photos.series.paperama.paperama3,
            photos.series.paperama.paperama4,
            photos.series.paperama.paperama5
        ],
        year: 2024,
        type: "series",
        dimensions: "55x40 cm",
        technique: "Grafit, retoladors i collage sobre papers de Capellades"
    },
  };

export default artworks;