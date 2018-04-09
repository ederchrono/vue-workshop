<template>
  <div class="container">
    <div class="col-md-12">
      <pre v-if="requested"> requested </pre>
    </div>
  </div>
</template>

<script>
export default {
  
  computed: {
    requested() {
      return this.$store.state.movieRequested;
    }
  },

  mounted() {
    this.$store.dispatch('fetchSingleMovie');
  }

}
</script>
