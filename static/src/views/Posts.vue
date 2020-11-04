<template lang="html">
  <section>
    <Create/>
    <Thread/>
  </section>
</template>

<script>
import Create from '@/components/Create';
import Thread from '@/components/Thread';



export default {
  name:'Posts',
  components:{
    Create, Thread
  },
  computed:{
    posts(){
      return this.$store.state.Posts;
    }
  }
}

</script>

<style lang="scss" scoped>



</style>
