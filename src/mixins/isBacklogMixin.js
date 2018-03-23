const isBacklogMixin = {
  computed: {
    isBacklog() {
      return this.$route.path==='/movies/backlog'
    }
  }
}

export default isBacklogMixin
