<template>
  <section>
    <h1>Lets Get Started!</h1>
    <input type="text" v-model="username" placeholder="username">
    <br>
    <button type="button" name="button" @click="start">Start</button>

  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return {
      username:'',
    };
  },
  methods:{
    start(){
      this.$store.commit('start', this.username);
      this.$router.push({name:'Posts'})
    }
  }
};
</script>
