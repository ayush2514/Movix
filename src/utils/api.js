//Axios use krke ek global method likhna hai API calls karwane ke liye
//Jisko throughout the application hum use kar sake

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url,{
        headers,
        params
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
