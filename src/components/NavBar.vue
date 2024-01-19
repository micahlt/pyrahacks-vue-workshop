<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <div>
    <router-link to="/facts/random">Random</router-link>
    <router-link to="/search">Search</router-link>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  font-family: sans-serif;
}

a {
  margin: 0.2rem 1rem;
}
</style>