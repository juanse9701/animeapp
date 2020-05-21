export interface TopItem {
    end_date: string;
    episodes: number;
    image_url: string;
    mal_id: number;
    members: number;
    rank: number;
    score: number;
    start_date: string;
    title: string;
    type: string;
    url: string;
}

export interface TopList {
    top: Array<TopItem>;
}

/* ------ Season Anime------------ */

export interface Season {
    mal_id: number;
    url: string;
    title: string;
    image_url: string;
    synopsis: string;
    type: string;
    airing_start: string;
    episodes: number;
    members: number;
    genres?: (Genres)[] | null;
  }

export interface Genres {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
