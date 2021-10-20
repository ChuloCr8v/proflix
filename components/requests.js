const API_KEY = "ebe41d78aa4c3c6c3395ab379071142c"

const requests = {
      fetchTopRated: "/top_rated?api_key=${API_KEY}&language=en-US", 
      fetchTrending: "/trending/all/week?api_key=${API_KEY}&with_networks=213",
      fetchNeflixOriginals: "/discover/tv?api_key=${API_KEY}&language=en-US", 
      fetchActionMovies: "/discover/tv?api_key=${API_KEY}&with_genres=28", 
      fetchComedyMovies: "/discover/tv?api_key=${API_KEY}&with_genres=35", 
      fetchHorrorMovies: "/discover/tv?api_key=${API_KEY}&with_genres=27", 
      fetchRomanceMovies: "/discover/tv?api_key=${API_KEY}&with_genres=10749", 
      fetchDocumentaries: "/discover/tv?api_key=${API_KEY}&with_genres=99", 
      
}

export default requests