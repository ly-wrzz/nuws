<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    mounted(){
	    var token = localStorage.getItem("newsToken") || "";
      if (!token) {
        this.$util.getTokene();
      }
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body,#app{
  width: 100%;
  height: 100%;
}
.vux-number-round{
  div{
    float: none !important;
    display: flex;
    justify-items: center;
    align-items: center;
    input{
      margin: 0 20px;
      height: 40px;
    }
  }
}
button{
  outline: none;
}
ul, ol, dl, li{
  list-style-type: none;
}
</style>
