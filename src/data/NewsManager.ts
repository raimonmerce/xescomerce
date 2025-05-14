import { News } from '../types';
import newsData from './NewsData';

export class NewsManager {
    private static instance: NewsManager | null = null;
    private news: { [id: string]: News };

    private constructor() {
        this.news = this.loadNews();
    }

    public static getInstance(): NewsManager {
        if (this.instance === null) {
            this.instance = new NewsManager();
        }
        return this.instance;
    }

    /**
     * Loads and converts all news items into proper types.
     */
    private loadNews(): { [id: string]: News } {
        const newsObj: { [id: string]: News } = {};
        for (const id in newsData) {
            if (Object.prototype.hasOwnProperty.call(newsData, id)) {
                const data = newsData[id];
                newsObj[id] = {
                    ...data,
                    ...(data.date && { date: new Date(data.date) })
                };
            }
        }
        return newsObj;
    }

    getById(id: string): News | null {
        return this.news[id] || null;
    }

    /**
     * Returns all available news item IDs.
     */
    public getAllNewsIDs(): string[] {
        return Object.keys(this.news);
    }
}