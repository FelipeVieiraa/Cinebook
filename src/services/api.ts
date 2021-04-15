import axios from 'axios';

import { DEFAULT_API_CONFIG } from './api.config';

const api = axios.create({
  baseURL: DEFAULT_API_CONFIG.url
});

async function getAllShowsPosters() {
  try {
    const shows = await api.get("shows");
    return shows.data
  }
  catch(err) {
    console.log(err);
    return {}
  }
}

export const apiFunctions = {
  getAllShowsPosters
}