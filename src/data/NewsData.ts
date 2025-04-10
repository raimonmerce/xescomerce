import { News } from '../types';
//import { photos } from '../assets/photos/photos';

const news: { [id: string]: News } = {
    "New1": {
        name: "newsletter.news.new1.title",
        description: "newsletter.news.new1.description",
        thumbnail: '../assets/photos/news/xescomerce_noticies_1.jpg',
        date: new Date("2025-05-15T09:00:00Z"),
        location: "Barcelona"
    }
}

export default news;