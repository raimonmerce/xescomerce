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

    getByName(name: string): Artwork | null {
        const foundArtwork = Object.values(this.artworks).find(
            (artwork) => artwork.name.toLowerCase() === name.toLowerCase()
        );
        return foundArtwork || null;
    }

    getByType(type: string): Artwork[] {
        return Object.values(this.artworks).filter(
            (artwork) => artwork.type.toLowerCase() === type.toLowerCase()
        );
    }

    getByYear(year: number): Artwork[] {
        return Object.values(this.artworks).filter(
            (artwork) => artwork.year === year
        );
    }

    getAllArtworks(): Artwork[] {
        return Object.values(this.artworks);
    }
}
