import { Video } from '../types';
import videoData from './VideoData';

export class VideoManager {
    private static instance: VideoManager | null = null;
    private videos: { [id: string]: Video };

    private constructor() {
        this.videos = this.loadVideos();
    }

    public static getInstance(): VideoManager {
        if (this.instance === null) {
            this.instance = new VideoManager();
        }
        return this.instance;
    }

    /**
     * Loads and converts all news items into proper types.
     */
    private loadVideos(): { [id: string]: Video } {
        return videoData;
    }

    getById(id: string): Video | null {
        return this.videos[id] || null;
    }

    /**
     * Returns all available news item IDs.
     */
    public getAllVideosIDs(): string[] {
        return Object.keys(this.videos);
    }
}