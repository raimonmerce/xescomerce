import { News } from '../types';
import { photos } from '../assets/photos/photos';

const news: { [id: string]: News } = {
    // "New2": {
    //     name: "newsletter.news.new2.title",
    //     subtitle: "newsletter.news.new2.subtitle",
    //     description: "newsletter.news.new2.description",
    //     thumbnail: photos.news.newsDesertnivi,
    //     date: new Date("2025-10-01T00:00:00Z"),
    //     space: "Espai Nivi",
    //     location: "Culla, Castelló"
    // },
    // "Errant": {
    //     name: "Errant 25",
    //     subtitle: "Festival",
    //     description: "newsletter.news.errant.description",
    //     thumbnail: photos.news.errant.thumb,
    //     images: [
    //         photos.news.errant.img
    //     ],
    //     date: new Date("2025-07-17T00:00:00Z"),
    //     location: "Coll de Nargó, Alt Urgell, Lleida"
    // },
    // "Comacasa": {
    //     name: "Com a Casa",
    //     subtitle: "newsletter.news.new5.subtitle",
    //     description: "newsletter.news.comacasa.description",
    //     thumbnail: photos.news.comacasa.thumb,
    //     images: [
    //         photos.news.gaza.img
    //     ],
    //     date: new Date("2025-06-12T00:00:00Z"),
    //     space: "Espai de lliure creació Carme Malaret",
    //     location: "Sant Just Desvern, Barcelona"
    // },
    "carrament": {
        name: "Carrément Toujours 2025",
        subtitle: "newsletter.news.carrament.subtitle",
        description: "newsletter.news.carrament.description",
        thumbnail: photos.news.carrament.thumb,
        images: [
            photos.news.carrament.img
        ],
        date: new Date("2025-12-01T00:00:00Z"),
        space: "Galerie 4",
        location: "Barbier, Nîmes, France"
    },
    "ceciNestPass": {
        name: "Ceci n’est pas la col·lecció Reventós",
        subtitle: "newsletter.news.ceciNestPass.subtitle",
        description: "newsletter.news.ceciNestPass.description",
        thumbnail: photos.news.ceciNestPass.thumb,
        images: [
            photos.news.ceciNestPass.img
        ],
        date: new Date("2025-12-01T00:00:00Z"),
        space: "L’Harmonia",
        location: "Museu d’Història de L’Hospitalet de Llobregat"
    },
    "nivi": {
        name: "El desert químic",
        subtitle: "newsletter.news.nivi.subtitle",
        description: "newsletter.news.nivi.description",
        thumbnail: photos.news.nivi.thumb,
        images: [
            photos.news.nivi.img
        ],
        date: new Date("2025-11-01T00:00:00Z"),
        space: "Espai Nivi",
        location: "Culla, Castelló"
    },
    "vidaNormal": {
        name: "Vida normal",
        subtitle: "newsletter.news.vidaNormal.subtitle",
        description: "newsletter.news.vidaNormal.description",
        thumbnail: photos.news.vidaNormal.thumb,
        images: [
            photos.news.vidaNormal.img
        ],
        date: new Date("2026-02-01T00:00:00Z"),
        space: "Galerie 4",
        location: "Barbier, Nîmes, França"
    },
    "New5": {
        name: "newsletter.news.new5.title",
        subtitle: "newsletter.news.new5.title",
        description: "newsletter.news.new5.description",
        thumbnail: photos.news.gaza.thumb,
        images: [
            photos.news.gaza.img
        ],
        date: new Date("2025-05-30T00:00:00Z"),
        space: "Taller (13)",
        location: "Ille-sur-Tet i La Capelleta, Céret (França)"
    },
    "santJordi": {
        name: "Retaule de la llegenda de la Princesa Drac",
        subtitle: "newsletter.news.santJordi.subtitle",
        description: "newsletter.news.santJordi.description",
        thumbnail: photos.news.santJordi.thumb,
        images: [
            photos.news.santJordi.img
        ],
        date: new Date("2026-04-14T00:00:00Z"),
        space: "Pati de l’Institut d’Estudis Ilerdencs",
        location: "Lleida"
    },
    "pinturaFresca": {
        name: "Pintura Fresca",
        subtitle: "newsletter.news.pinturaFresca.subtitle",
        description: "newsletter.news.pinturaFresca.description",
        thumbnail: photos.news.pinturaFresca.thumb,
        images: [
            photos.news.pinturaFresca.img
        ],
        date: new Date("2026-05-22T00:00:00Z"),
        space: "Galeria Indecor, Carrer General Brito, 23, 25007 Lleida",
        location: "Lleida"
    },
    // "New4": {
    //     name: "newsletter.news.new4.title",
    //     subtitle: "newsletter.news.new4.title",
    //     description: "newsletter.news.new4.description",
    //     thumbnail: photos.news.obrim.thumb,
    //     images: [
    //         photos.news.obrim.img
    //     ],
    //     date: new Date("2025-05-22T00:00:00Z"),
    //     space: "Espai de Lliure Creació Carme Malaret",
    //     location: "Sant Just Desvern, Barcelona"
    // },
    // "New3": {
    //     name: "newsletter.news.new3.title",
    //     subtitle: "newsletter.news.new3.title",
    //     description: "newsletter.news.new3.description",
    //     thumbnail: photos.news.newsViT,
    //     images: [
    //         photos.news.newsVi
    //     ],
    //     date: new Date("2025-05-08T00:00:00Z"),
    //     space: "Can Xerta, Sant Pere de Riudebitlles",
    //     location: "Culla, Castelló"
    // },
    // "New1": {
    //     name: "newsletter.news.new1.title",
    //     subtitle: "newsletter.news.new2.title",
    //     description: "newsletter.news.new1.description",
    //     thumbnail: photos.news.newsLliga,
    //     date: new Date("2025-05-03T00:00:00Z"),
    //     space: "Lo Pardal – Fundació Guillem Viladot",
    //     location: "Agramunt, Lleida"
    // },


}

export default news;