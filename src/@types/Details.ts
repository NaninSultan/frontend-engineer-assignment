export type Details = {
  id: number;
  original_title?: string;
  name?: string;
  poster_path?: string;
  overview?: string;
  videos?: {
    results: Array<{ key: string }>
  }
  backdrop_path?: string
};