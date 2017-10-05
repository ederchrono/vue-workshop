<template>
  <li class="list-group-item">
    {{ description }} - {{ done ? 'done' : 'nope' }}
    <button
      @click="toggle"
      class="btn btn-sm btn-primary float-right">
      toggle!
    </button>
  </li>
</template>

<script>
  export default {
    props: ['description', 'done'],

    methods: {
      toggle () {
        this.$emit('onToggle')
      }
    }
  }
</script>

<style>

</style>
