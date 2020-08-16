<template>
  <div class="hello">
    <!-- <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1> -->
      <router-link class="hello_a" to="/subsidy/index">领补贴</router-link>
      <router-link class="hello_a" to="/policy/index">查政策</router-link>
      <router-link class="hello_a" to="/my/my">我的企业</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .hello_a{
    font-size: 20px;
    margin: 0 20px;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
