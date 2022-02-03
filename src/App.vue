<template>
<div>
  <header>
    <div id="header-wrap">
      <div class="logo">
        <img src="./assets/logo.svg" alt="" />
      </div>
      <div id="nav">
        <ul>
          <router-link to="/">Home</router-link> |
          <router-link to="/contact">Contact</router-link>
        </ul>
      </div>
    </div>
  </header>

  <section class="Ptitle">
    <div class="Inner">
      <h1> {{ Ptitle }} </h1>
      <span> {{ Pspan }} </span>
    </div>
  </section>
  <router-view/>

</div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      Ptitle: 'A world where small business can compete on an even playing field with large companies',
      Pspan: 'The test approach vision'
    }
  },
}
</script>

<!--  Ran into compile error for missing module, likely due to bad/rushed setup of project, or by using Vue3 
      I kept the scss asset file there to showcase some global style and use of scss if it were to compile.
-->
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap');
#app {
  font-family: Montserrat, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}

header {
  position: relative;
  background: white;
  padding: 1em;
}
#header-wrap {
  display: flex;
  width: 50vw;
  margin: auto;
}
.logo {
  display: flex;
  align-items: center;
  margin-right: auto;
  max-height: 100%;
}
.logo img {
  width: 20vw;
  display: block;
  max-height: 100%;
}
#nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 0 0 auto;
  flex-grow: 0;
}
#nav ul {
  padding-right: 0.5rem;
  margin-right: 0.5rem;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #e20388;
}
section {
  width: 50vw;
  margin: auto;
  text-align: left;
}
.Ptitle {
  background: rgb(161,33,109);
  background: linear-gradient(90deg, rgba(161,33,109,1) 27%, rgba(226,3,136,1) 79%, rgba(226,3,136,1) 100%);
  width: 100vw;
  padding: 4em 0;
}
.Inner {
  width: 50vw;
  margin: auto;
  color: white;
  text-align: left;
}
@media only screen and (max-width: 600px) {
  section {
    width: 80vw;
  }
  .Inner {
    width: 80vw;
  }
}
</style>
