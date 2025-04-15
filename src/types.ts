export type ArtworkType = 
    "accions" |
    "cartells" |
    "escultures" |
    "experiments" |
    "gransformats" |
    "instalacions" | 
    "murals" |
    "publicacions" |  
    "series";

export interface Artwork {
    name: string;
    description: string;
    thumbnail: string;
    year: number | string;
    type: ArtworkType;

    // Optional properties (specific to certain types)
    images?: string[];
    subtitol?: string;  
    technique?: string;
    dimensions?: string;
    location?: string;
    editor?: string;
}

export interface News  {
    name: string;
    description: string;
    thumbnail: string;
    images?: string[];
    date: Date;
    location: string
}

export interface Thumbnail  {
    name: string;
    thumbnail: string;
}