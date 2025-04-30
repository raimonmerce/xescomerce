import { News } from '../types';
import { photos } from '../assets/photos/photos';

const news: { [id: string]: News } = {
    "New1": {
        name: "newsletter.news.new1.title",
        subtitle: "newsletter.news.new2.title",
        description: "newsletter.news.new1.description",
        thumbnail: photos.news.lliga,
        date: new Date("2025-05-03T00:00:00Z"),
        space: "Lo Pardal – Fundació Guillem Viladot",
        location: "Agramunt, Lleida"
    },
    "New2": {
        name: "newsletter.news.new2.title",
        subtitle: "newsletter.news.new2.subtitle",
        description: "newsletter.news.new2.description",
        thumbnail: photos.news.desertnivi,
        date: new Date("2025-10-01T00:00:00Z"),
        space: "Espai Nivi",
        location: "Culla, Castelló"
    },
    "New3": {
        name: "newsletter.news.new3.title",
        subtitle: "newsletter.news.new2.title",
        description: "newsletter.news.new3.description",
        thumbnail: photos.news.videos,
    }
}

export default news;