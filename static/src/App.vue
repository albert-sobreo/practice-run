<template>
  <main id="app">
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

section{
  width: 100%;
  max-width: 1000px;
  margin: 7px auto;

  article{
    padding: 7px;
    border-radius: 4px;
    margin: 7px auto;

  }


}


button{
  padding: 4px 7px;
  border-radius: 3px;
  background-color: crimson;
  color: white;
  font-size: 100%;
  border: none;
  outline: none;

  &:active{
    padding: 3px 6px;
  }
}
textarea, input{
  outline: none;
  border: 1px solid grey;
  padding: 7px;
  font-family: inherit;
  font-size: 100%;
  border-radius: 3px;
}



</style>
