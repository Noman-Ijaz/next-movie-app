import axios from "axios";

const apiKey = process.env.MOVIE_API_KEY;


export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getShows = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );

    return data;
  } catch (error) {
    return error.response;
  }
};

export const getTopRated = async (page) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getpopular = async () => {
  try {
    // const apiKey = process.env.MOVIE_API_KEY;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`
    );

    return data;
  } catch (error) {
    return error.response;
  }
};

export const getUpcoming = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getMovieDetail = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getMovieCredit = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getSmilarMovies = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getMoviesCollection = async (collectionName) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${collectionName}?api_key=${apiKey}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getYoutubeVideo = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getPersonDetail = async (personId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getPersonActingRecords = async (personId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getRecommendation = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

export const getMultiSearch = async (search) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    );

    return data;
  } catch (error) {
    return error.response;
  }
};
