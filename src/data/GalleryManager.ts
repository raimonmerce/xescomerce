import { Artwork } from '../types';
import artworks from './GalleryData'; // Adjust the path as necessary

export class GalleryManager {
    private static instance: GalleryManager | null = null;
    private artworks: { [id: string]: Artwork };

    private constructor() {
        this.artworks = this.loadArtworks();
    }

    public static getInstance(): GalleryManager {
        if (this.instance === null) {
            this.instance = new GalleryManager();
        }
        return this.instance;
    }

    private loadArtworks(): { [id: string]: Artwork } {
        return artworks;
    }

    getById(id: string): Artwork | null {
        return this.artworks[id] || null;
    }

    getIdByName(name: string): string | null {
        const foundEntry = Object.entries(this.artworks).find(
            ([_, artwork]) => artwork.name.toLowerCase() === name.toLowerCase()
        );
        return foundEntry ? foundEntry[0] : null;
    }
    
    getIdsByType(type: string): string[] {
        return Object.entries(this.artworks)
            .filter(([_, artwork]) => artwork.type.toLowerCase() === type.toLowerCase())
            .map(([id, _]) => id);
    }
    
    getIdsByYear(year: number): string[] {
        return Object.entries(this.artworks)
            .filter(([_, artwork]) => artwork.year === year)
            .map(([id, _]) => id);
    }
    
    getAllArtworkIds(): string[] {
        return Object.keys(this.artworks);
    }

    getRandomArtworkKey(): string | null {
        const keys = Object.keys(this.artworks);
        if (keys.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * keys.length);
        return keys[randomIndex];
    }

    getRandomArtworkByTypeKey(type: string): string | null {
        const keysByType = Object.entries(this.artworks)
            .filter(([_, artwork]) => artwork.type.toLowerCase() === type.toLowerCase())
            .map(([key, _]) => key);
        
        if (keysByType.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * keysByType.length);
        return keysByType[randomIndex];
    }
}
