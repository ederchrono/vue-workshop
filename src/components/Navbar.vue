<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      My first Vue app
    </router-link>

    <button class="navbar-toggler" @click="collapse=!collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{'collapse':collapse, 'navbar-collapse':true}">
      <ul class="navbar-nav">

        <navbar-link to="/" label="To do app"/>

        <navbar-link to="/movies" label="Movies"/>

      </ul>
    </div>

  </nav>
</template>

<script>
import NavbarLink from './NavbarLink'
export default {
  components: {
    NavbarLink
  },
  data () {
    return {
      collapse: true
    }
  }
}
</script>
