<template>
  <main>
    <input type="search" v-model="q" @keyup="search" />
    <ul>
      <li v-for="f in results" :key="f.id">
        <router-link :to="`/facts/${f.id}`">
          {{ f.text }}
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      q: "",
      results: [],
    };
  },
  methods: {
    search(e) {
      if (e.key == "Enter") {
        fetch(`https://cornapi.micahlt.repl.co/facts/search/${this.q}`)
          .then((res) => res.json())
          .then((data) => {
            this.results = data.results;
          });
      }
    },
  },
};
</script>

<style scoped>
a {
  color: green;
  font-family: sans-serif;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

li {
  margin-top: 1rem;
}
</style>