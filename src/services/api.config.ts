const API_URL = "http://api.tvmaze.com/";

export interface ApiConfig {
  url: string
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || "https://jsonplaceholder.typicode.com"
}