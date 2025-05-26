import { News } from '../types';
import { photos } from '../assets/photos/photos';

const news: { [id: string]: News } = {
    "New2": {
        name: "newsletter.news.new2.title",
        subtitle: "newsletter.news.new2.subtitle",
        description: "newsletter.news.new2.description",
        thumbnail: photos.news.newsDesertnivi,
        date: new Date("2025-10-01T00:00:00Z"),
        space: "Espai Nivi",
        location: "Culla, Castelló"
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
    "New4": {
        name: "newsletter.news.new4.title",
        subtitle: "newsletter.news.new4.title",
        description: "newsletter.news.new4.description",
        thumbnail: photos.news.obrim.thumb,
        images: [
            photos.news.obrim.img
        ],
        date: new Date("2025-05-22T00:00:00Z"),
        space: "Espai de Lliure Creació Carme Malaret",
        location: "Sant Just Desvern, Barcelona"
    },
    "New3": {
        name: "newsletter.news.new3.title",
        subtitle: "newsletter.news.new3.title",
        description: "newsletter.news.new3.description",
        thumbnail: photos.news.newsViT,
        images: [
            photos.news.newsVi
        ],
        date: new Date("2025-05-08T00:00:00Z"),
        space: "Can Xerta, Sant Pere de Riudebitlles",
        location: "Culla, Castelló"
    },
    "New1": {
        name: "newsletter.news.new1.title",
        subtitle: "newsletter.news.new2.title",
        description: "newsletter.news.new1.description",
        thumbnail: photos.news.newsLliga,
        date: new Date("2025-05-03T00:00:00Z"),
        space: "Lo Pardal – Fundació Guillem Viladot",
        location: "Agramunt, Lleida"
    },


}

export default news;