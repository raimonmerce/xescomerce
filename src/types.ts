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
    subtitle?: string;
    thumbnail: string;
    images?: string[];
    date?: Date;
    location?: string;
    space?: string;
}

export interface Thumbnail  {
    name: string;
    thumbnail: string;
}

export interface Video  {
    name: string;
    url: string;
    thumbnail: string;
    subtitle?: string;
}