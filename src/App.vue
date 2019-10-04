<template>
  <div id="app">
   <my-header/>
    <router-view/>  
   <my-foot/>
  </div>
</template>

<script>
import MyHeader from './components/header'
import "./assets/css/common.css"
import MyFoot from './components/foot'
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFoot
  }
}
</script>

<style>

.router-link-active,a:hover,li.m-header:hover{
  color: green;
  text-decoration: none;
}
li.m-header:hover{
  cursor: pointer;
}
</style>
