import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/MovieService'
Vue.use(Vuex)

function shapeMovie(movie) {
  const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'
  return ({
    id: movie.id,
    image: `${imageBasePath}${movie.poster_path}`,
    title: movie.title,
    description: movie.overview,
    voteAverage: movie.vote_average
  })
}

const store = {
  state: {
    hello: 'world',
    movies: [],
    savedMovies: [],
    genres: [],
    selectedGenre: null,
    loading: false,
    movieRequested: false,
    movieDetails: {},
    currentPage: 1,
    totalPages: 0
  },

  actions: {
    async fetchMovies (context, page=1) {
      context.commit('setLoading', true)
      const moviesData = await MovieService.getMovies({
        page: page,
        genre: context.state.selectedGenre
      })
      context.commit('setMovies', moviesData.data)
      context.commit('setLoading', false)
    },
    async fetchGenres (context) {
      const genreData = await MovieService.getGenres()
      context.commit('setGenres', genreData.data)
    },
    async getSingleMovie(context, movieId) {
      const { data } = await MovieService.getSingleMovie(movieId)
      context.commit('singleMovieFetched', data)
    },
    filterMovies (context, genreId) {
      context.commit('setGenre', genreId)
      context.dispatch('fetchMovies')
    },
    fetchPage (context, page) {
      context.dispatch('fetchMovies', page)
    },
    saveMovie (context, movie) {
      context.commit('saveMovie', movie)
      context.commit('persistSavedMovies')
    },
    removeMovie (context, movie) {
      context.commit('removeMovie', movie)
      context.commit('persistSavedMovies')
    },
    fetchSavedMovies (context) {
      const savedMoviesJson = localStorage.getItem('savedMovies')
      let savedMovies = []
      try {
        savedMovies = JSON.parse(savedMoviesJson)
      } catch (error) {
        console.log(error)
      }
      context.commit('setSavedMovies', savedMovies || [])
    }
  },

  mutations: {
    setMovies (state, moviesData) {
      state.currentPage = moviesData.page
      state.totalPages = moviesData.total_pages
      state.movies = moviesData.results
    },
    setGenres (state, genreData) {
      state.genres = genreData.genres
    },
    setGenre (state, genreId) {
      state.selectedGenre = genreId
    },
    setLoading (state, value) {
      state.loading = value
    },
    saveMovie (state, movie) {
      state.savedMovies.push(movie)
    },
    singleMovieFetched(state, data) {
      state.movieDetails = shapeMovie(data)
    },
    removeMovie (state, removedMovie) {
      state.savedMovies = state.savedMovies
        .filter(movie => movie.id !== removedMovie.id)
    },
    persistSavedMovies (state) {
      localStorage.setItem('savedMovies',
        JSON.stringify(state.savedMovies))
    },
    setSavedMovies (state, savedMovies) {
      state.savedMovies = savedMovies
    }
  },

  getters: {
    movieCards (state) {
      return state.movies.map(shapeMovie);
    },
    selectedGenreName (state) {
      const genre = state.genres
        .find(genre => genre.id === state.selectedGenre)

      return genre ? genre.name : null
    }
  }
}
export default new Vuex.Store(store)
