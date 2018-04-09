<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link :class="{'nav-link':true, 'active': !isBacklog}"
        to="/movies" @click.prevent="clicked('discover')">
        Discover
      </router-link>
    </li>

    <li class="nav-item">
      <router-link :class="{'nav-link':true, 'active': isBacklog}"
        to="/movies/backlog" @click.prevent="clicked('backlog')">
        Backlog
      </router-link>
    </li>
  </ul>
</template>

<script>
import isBacklogMixin from '../../mixins/isBacklogMixin'

export default {
  mixins: [isBacklogMixin],
  data () {
    return {
      section: 'discover'
    }
  },

  methods: {
    clicked (section) {
      // TODO change section
    }
  }
}
</script>
