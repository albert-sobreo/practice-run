<template lang="html">
  <article>
    <h2>Create Post</h2>
    <textarea v-model="form"></textarea>
    <div class="right">
      <button type="button" name="button">Submit</button>

    </div>
  </article>
</template>

<script>
export default {
  name: 'Create',
  data(){
    return{
      form:''
    }
  },
  methods:{
    create(){
      this.$fetch.alert('okay');
    },
  }

}
</script>

<style lang="scss" scoped>
article{
  text-align: left;
  background: rgb(245,245,245);
  textarea{
    resize: none;
    width: 100%;
    box-sizing: border-box;
  }
}
.right{
  text-align: right;
  button{
    display: inline-block;
  }
}
</style>
