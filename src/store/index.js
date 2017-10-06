import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/MovieService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    genres: [],
    selectedGenre: null
  },

  actions: {
    async fetchMovies (context, page = 1) {
      const response = await MovieService.getMovies({
        page,
        genre: context.state.selectedGenre
      })
      context.commit('setMovies', response.data)
    },

    async fetchGenres (context) {
      const response = await MovieService.getGenres()
      context.commit('setGenres', response.data)
    },

    filterByGenre (context, genre) {
      context.commit('setSelectedGenre', genre)
      context.dispatch('fetchMovies')
    }
  },

  mutations: {
    setMovies (state, moviesData) {
      state.movies = moviesData.results
    },
    setGenres (state, genresData) {
      state.genres = genresData.genres
    },
    setSelectedGenre (state, genre) {
      state.selectedGenre = genre
    }
  },

  getters: {
    movieCards (state) {
      const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'

      return state.movies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        image: `${imageBasePath}${movie.poster_path}`,
        voteAverage: movie.vote_average
      }))
    }
  }
})
