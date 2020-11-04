<template lang="html">
  <div>


    <article v-for="(post,i) in posts" :key=i>
      <h2>{{post.username}}</h2>
      <p>{{post.post}}</p>
      <span @click="upvote">🔼{{post.upvote}}</span>
      <span @click="downvote">🔽{{post.downvote}}</span>

    </article>


  </div>

</template>

<script>
export default {
  name:'Thread',

  methods:{
    upvote(){
      window.alert('upvoted')
    },
    downvote(){
      window.alert('downvoted')

    }
  },
  computed:{
    posts(){
      return this.$store.state.Posts;
    }
  }
}
</script>

<style lang="scss" scoped>


  article{
    text-align: left;
    background: rgb(245,245,245);
    p{
      padding: 3px;
    }
    span{
      padding: 4px;
      cursor: pointer;
      &:hover{
        background: rgba(0,0,0,0.17);
        border-radius: 3px;
      }
    }
  }
</style>
