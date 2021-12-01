<template>
  <div id="user">
    <h3>The user</h3>
    <p>My name is {{ username }} and this is a component</p>
    <app-info></app-info>
  </div>
</template>

<script>
  import Info from './Info.vue';

  export default {
    data() {
      return {
        username: 'Homero Thompson',
        message: 'anything'
      }
    },
    components: {
      'app-info' : Info
    }
  }  
</script>

<style scoped lang="scss">
  p {
    font-style: italic;
  }
</style>