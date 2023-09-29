<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import AppNavbar from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
export default {
  components: {
    "app-navbar": AppNavbar,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
</style>