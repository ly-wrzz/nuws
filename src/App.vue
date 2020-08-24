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

input[type=radio]+label:before {
	content: "";
	display: inline-block;
	vertical-align: middle;
	font-size: 14px;
	position: relative;
	top: -2px;
	width: 1em;
	height: 1em;
	margin-right: .4em;
	border-radius: 50%;
	border: 1px solid #666;
	text-indent: .15em;
	padding: .1em;
}
input[type=radio]:checked+label:before {
	background-color: #147edd;
	border: 1px solid #147edd;
	background-clip: content-box;
}
input[type=radio]{
  position: absolute;
  opacity: 0;
}
</style>
