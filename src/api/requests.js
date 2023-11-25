const API_KEY = "1c60509f1c65b2a036fb414db513471f";

const requests = {
    fetchTopRated:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99`,
    fetchActionMovies:`https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genre=28`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=1c60509f1c65b2a036fb414db513471f&language=en-US&with_genres=27`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=99`,
}

export default requests;


