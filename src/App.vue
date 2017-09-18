<template>
  <div id="app">
     <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    // document.body.style.height = window.outerHeight + 'px'
  }
}
</script>

<style>
html {
  min-height: 100%;
}
@media screen and (max-width:359px) and (min-width:320px) { html,body{ font-size: 50px !important; } } 
@media screen and (max-width:374px) and (min-width:360px) { html,body{ font-size: 56.25px !important; } }
@media screen and (max-width:413px) and (min-width:375px) { html,body{ font-size: 58.5px !important; } }
@media screen and (max-width:639px)  and (min-width:414px){ html,body{ font-size: 64.6px !important; } }
@media screen and (min-width:640px) { html,body{ font-size: 100px !important; } }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
}
</style>
