<template>
  <div class="container padded">
    <div class="row justify-content-center">
      <div class="col-5">
        <movie-card v-bind="details" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'

export default {
  components: {
    MovieCard
  },
  computed: {
    requested() {
      return this.$store.state.movieRequested
    },

    details() {
      return this.$store.state.movieDetails
    }
  },

  mounted() {
    const movieId = this.$route.params.id
    this.$store.dispatch('getSingleMovie', movieId)
  }
}
</script>

<style>
  .padded {
    margin-top: 2em;
  }
</style>
