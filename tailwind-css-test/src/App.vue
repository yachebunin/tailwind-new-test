<template>
  <HeaderComponent />
  <MainBanner />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainBanner from '@/components/MainBanner.vue'

export default {
  name: 'App',
  components: { HeaderComponent, MainBanner }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
