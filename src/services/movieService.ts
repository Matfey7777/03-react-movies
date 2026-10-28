import axios from "axios";
import type { Movie } from "../types/movie";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

const fetchMovies = async (query: string): Promise<Movie[]> => {
  const result = await request.get<FetchMoviesResponse>("/search/movie", {
    params: {
      query,
    },
  });
  return result.data.results;
};
export default fetchMovies;

interface FetchMoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
