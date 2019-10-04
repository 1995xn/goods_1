<template>
  <div>
      <my-title titlie-name="关于我们"></my-title>
      <div class="about">
         
        <router-link to="/about">关于我们</router-link>
        <router-link to="/about/two">关于我们</router-link>
        <router-link to="/about/there">关于我们</router-link>
      </div>
      <div class="conent">
          <transition enter="in-out" :name="names">
              <keep-alive>
                <router-view/>
              </keep-alive>
          </transition>
           <div>
              <input type="button"value="返回"@click="headle">
          </div>
      </div>
  </div>
</template>

<script>
import MyTitle from"../components/titlie"
export default {
    data(){
        return{
            names:"left"
        }
    },
components:{
    MyTitle
  },
  watch:{
    $route(to,from){
        if(to.meta.index<from.meta.index){
            this.names="right"
        }else{
            this.names="left"
        }
    }
  },
methods:{
    headle(){
        this.$router.push({path:"/index"});
    }
}
}
</script>

<style>
.about{
    width: 300px;
    height: 30px;
    margin: 0px auto;
}
.conent{
    width: 100%;
    height: 300px;
    background: #abcdef;
}
/* .v-enter{
    opacity: 0;
}
.v-enter-to{
    opacity: 1;
}

.v-enter-active{
    transition: 1s;
}
.v-leave{
    opacity: 1;
}
.v-enter-active{
    transition: 1s;
}
.v-leave-to{
    opacity: 0;
} */
 .left-enter{
    transform: translateX(100%)
}
.left-enter-to{
    transform: translateX(0%)
}

.left-enter-active{
    transition: 1s;
} 

.right-enter{
    transform: translateX(-100%)
}
.right-enter-to{
    transform: translateX(0%)
}

.right-enter-active{
    transition: 1s;
} 
</style>
