<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './views/Navigation'
import Footer from './views/Footer'

export default {
  components: {
    Navigation,
    Footer
  },
  setup() {


    Navigation  },
}
</script>

<style lang="scss">

@import '@/assets/scss/home';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
