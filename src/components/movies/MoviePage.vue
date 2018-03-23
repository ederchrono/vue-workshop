<template>
  <div>

    <div class="container">
      <h1>My movies backlog</h1>
      <p>{{message}}</p>
    </div>

    <movie-nav/>

    <div class="container">

      <movie-filter v-if="!isBacklog"/>

      <h1 v-if="loading">Loading...</h1>

      <div class="row movie-container" :class="{'loading': loading}">

        <div v-for="movie in currentMovies"
          :key="movie.index"
          class="col-xs-12 col-sm-6 col-lg-3">
          <movie-card v-bind="movie"/>
        </div>

      </div>

      <pagination v-if="!isBacklog"/>

    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
import MovieNav from './MovieNav'
import Pagination from './Pagination'
import MovieFilter from './MovieFilter'
import isBacklogMixin from '../../mixins/isBacklogMixin'

export default {
  mixins: [isBacklogMixin],
  components: {
    MovieCard,
    MovieNav,
    Pagination,
    MovieFilter
  },
  computed: {
    message () {
      return this.$store.state.hello
    },
    movies () {
      return this.$store.getters.movieCards
    },
    loading () {
      return this.$store.state.loading
    },
    currentMovies() {
      if(this.isBacklog) {
        return this.$store.state.savedMovies
      }
      return this.movies
    }
  },
  mounted () {
    this.$store.dispatch('fetchMovies')
    this.$store.dispatch('fetchSavedMovies')
  }
}
</script>

<style scoped>
.movie-container {
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.3s opacity;
}

.loading{
  opacity: 0.2;
}
</style>
