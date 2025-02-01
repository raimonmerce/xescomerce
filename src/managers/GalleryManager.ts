export interface GalleryPiece {
    name: string;
    description: string;
    thumbnail: string;
    imatges: string[];
    type: string;
    link: string;
}

type GalleryData = Record<string, GalleryPiece>;

export class GalleryManager {
    private static instance: GalleryManager;
    private data: GalleryData = {};
    private static readonly DEFAULT_JSON_PATH = '/data/gallery.json'; // Assuming the JSON is in the public folder
    private sortedKeys: string[] = [];
    private currentIndex: number = 0;

    private constructor(jsonPath: string) {
        this.loadData(jsonPath);
    }

    static getInstance(jsonPath: string = GalleryManager.DEFAULT_JSON_PATH): GalleryManager {
        if (!GalleryManager.instance) {
            GalleryManager.instance = new GalleryManager(jsonPath);
        }
        return GalleryManager.instance;
    }

    private async loadData(jsonPath: string): Promise<void> {
        try {
            const response = await fetch(jsonPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${jsonPath}`);
            }
            const rawData = await response.json();
            this.data = rawData;
            this.sortedKeys = Object.keys(this.data).sort();
        } catch (error) {
            console.error("Error loading gallery data:", error);
        }
    }

    getPiece(name: string): GalleryPiece | null {
        for (const key in this.data) {
            if (this.data[key].name === name) {
                return this.data[key];
            }
        }
        return null;
    }

    getRandomPiece(): GalleryPiece | null {
        if (this.sortedKeys.length === 0) return null;
        const key = this.sortedKeys[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.sortedKeys.length;
        return this.data[key];
    }
}
