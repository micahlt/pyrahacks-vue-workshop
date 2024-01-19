<template>
  <main>
    <div v-if="fact">
      <h1>FACT #{{ fact.id }}</h1>
      <p>{{ fact.text }}</p>
    </div>
    <div v-else>
      <h2>Loading...</h2>
    </div>
  </main>
</template>

<script>
export default {
  name: "Fact",
  data() {
    return {
      fact: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      fetch(`https://pyrahacks-corn.micahlt.repl.co/facts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.fact = data;
        });
    } else {
      this.$router.push("/home");
    }
  },
};
</script>