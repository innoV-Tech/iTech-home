<template>
  <v-app id='app'>
    <v-main>
      <NavBar />
      <router-view class="animated fadeIn"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/layouts/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
  created(){},
  methods: {
    // createSession() {
    //   if (!this.$session.has("auth")) {
    //     this.$session.start();
    //     this.$session.set("auth", false);
    //   }
    //   this.$store.state.AUTHENTICATED = this.$session.get("auth");
    //   console.log(this.$store.state.AUTHENTICATED);
    // },
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Amita");
@import url("https://fonts.googleapis.com/css?family=Arbutus+Slab");
html,
body {
  font-family: "Arbutus Slab", Helvetica, Arial, sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Arbutus Slab", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
