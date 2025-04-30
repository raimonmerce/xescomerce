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
            if (newsData.hasOwnProperty(id)) {
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

    /**
     * Returns all news item IDs from the provided year.
     * @param year The full year (e.g., 2025)
     */
    public getNewsIDsFromYear(year: number): string[] {
        return Object.entries(this.news)
            .filter(([_, newsItem]) => newsItem.date.getFullYear() === year)
            .map(([id, _]) => id);
    }

    /**
     * Returns all news item IDs from the specified month and year.
     * @param year The full year (e.g., 2025)
     * @param month The month index from 1 to 12 (1: January, 12: December)
     */
    public getNewsIDsFromMonth(year: number, month: number): string[] {
        return Object.entries(this.news)
            .filter(([_, newsItem]) =>
                newsItem.date.getFullYear() === year &&
                (newsItem.date.getMonth() + 1) === month
            )
            .map(([id, _]) => id);
    }

    /**
     * Returns all news item IDs where the date is strictly before the specified date.
     * @param date A Date object to compare with.
     */
    public getNewsIDsBeforeDate(date: Date): string[] {
        return Object.entries(this.news)
            .filter(([_, newsItem]) => newsItem.date < date)
            .map(([id, _]) => id);
    }

    /**
     * Returns all news item IDs where the date is strictly after the specified date.
     * @param date A Date object to compare with.
     */
    public getNewsIDsAfterDate(date: Date): string[] {
        return Object.entries(this.news)
            .filter(([_, newsItem]) => newsItem.date > date)
            .map(([id, _]) => id);
    }

    /**
     * Returns all news item IDs that are on the same day as the specified date.
     * The comparison ignores hours, minutes, and seconds.
     * @param date A Date object to compare with.
     */
    public getNewsIDsAtDate(date: Date): string[] {
        return Object.entries(this.news)
            .filter(([_, newsItem]) => {
                const newsDate = newsItem.date;
                return newsDate.getFullYear() === date.getFullYear() &&
                       newsDate.getMonth() === date.getMonth() &&
                       newsDate.getDate() === date.getDate();
            })
            .map(([id, _]) => id);
    }
}