export type ArtworkType = 
    "PetitsFormats" |
    "GransFormats" |
    "Experiments" |
    "Escultures" |
    "Murals" |
    "Accions" |
    "Instalacions" | 
    "Cartells" |
    "Publicacions";

export interface BaseArtwork  {
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  year: number;
  type: ArtworkType;
}

export interface GransFormatsArtwork extends BaseArtwork {
    type: "GransFormats";
    technique: string;
    dimensions: string;
}

export interface PublicacionsArtwork extends BaseArtwork {
    type: "Publicacions";
    editor: string;
}

export type Artwork = 
    BaseArtwork |
    GransFormatsArtwork |
    PublicacionsArtwork