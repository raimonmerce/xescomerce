import { Video } from '../types';
import { photos } from '../assets/photos/photos';

const videos: { [id: string]: Video } = {
    "videoDesert": {
        name: "Lo Desert Químic",
        thumbnail: photos.videos.videoDesert,
        url: "https://www.tarrega.tv/lo-desert-quimic-de-xesco-merce-fins-al-27-dagost-a-lo-pardal-dagramunt/",
        subtitle: "Tàrrega TV"
    },
    "videoEscarabajo": {
        name: "El Paisaje en el Divan",
        thumbnail: photos.videos.videoEscarabajo,
        url: "https://www.rtve.es/television/20081111/paisaje-divan-escarabajo-verde/193298.shtml",
        subtitle: "RTVE"
    },
    "videoKaunas": {
        name: "Simpòsium KANÎBAL’HOPOX",
        thumbnail: photos.videos.videoKaunas,
        url: "https://www.youtube.com/watch?v=qcdWbKklB3E",
        subtitle: "Kaunas, Lituania"
    },
    "videoLaLliga": {
        name: "La Lliga de la Justícia Poètica",
        thumbnail: photos.videos.videoLaLliga,
        url: "https://www.tarrega.tv/lo-pardal-dagramunt-acull-una-oda-internacional-a-la-poesia-visual/",
        subtitle: "Tàrrega TV"
    },
    "videoLaSalle": {
        name: "Simpòsium KANÎBAL’HOPOX",
        thumbnail: photos.videos.videoLaSalle,
        url: "https://www.youtube.com/watch?v=O-nZncEn5IgSIMPÒSIUM",
        subtitle: "Cannes-Lasalle, França"
    },
    "videoMiralls": {
        name: "Miralls Tatuats",
        thumbnail: photos.videos.videoMiralls,
        url: "https://www.youtube.com/watch?v=C-5dzKlpEeM&t=3s",
        subtitle: "BTV"
    },
    "videoOmne": {
        name: "Festival OMNE",
        thumbnail: photos.videos.videoOmne,
        url: "https://www.youtube.com/watch?v=9Qs7QadKl1s",
        subtitle: "Bretanya"
    },
    "videoPortes": {
        name: "Portes Endins",
        thumbnail: photos.videos.videoPortes,
        url: "https://www.mollerussa.tv/xesco-merce-portes-endins/",
        subtitle: "Mollerussa TV"
    },
    "videoViallibres": {
        name: "Via Llibres",
        thumbnail: photos.videos.videoViallibres,
        url: "https://www.3cat.cat/3cat/xesco-merce/video/4038370/",
        subtitle: "TV3"
    },

}

export default videos;