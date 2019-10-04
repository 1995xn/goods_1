import Vue from "vue"
import Vuex from "vuex"
import {goodData,imgList} from "../datas/goodData.js"
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    goodData,
    imgList,
    cartData:[],
    isShowCart:false,
  },
  mutations: {
    addCart (state,data) {
     let boff = true;
     state.cartData.forEach((goods)=>{
       if(goods.id==data.id){
         goods.count++;
         boff = false;
       }
     })
      if(boff){
        let goodData = data;
        Vue.set(goodData,"count",1);
        state.cartData.push(goodData);
      }
    },
    changeNum(state,data){
      if(data.flag==1){
        state.cartData[data.index].count--;
        if(state.cartData[data.index].count<1){
          state.cartData.splice(data.index,1);
        }
      }else if(data.flag==2){
        state.cartData[data.index].count++;
      }
    },
    popShow(state){
      state.isShowCart = !state.isShowCart;
    },
    closePop(state){
      if(state.isShowCart){
        state.isShowCart=false;
      }
    }
  },
actions:{
     addActions (context,data) {
      context.commit("addCart",data);
    },
    changeAction(context,data){
      context.commit("changeNum",data);
    },
    changePop(context,data){
      context.commit("popShow");
    },
    closePopAction(context,data){
      context.commit("closePop");
    },
},
getters:{
      totalCount(state){
            return state.cartData.reduce((proTotal,item)=>proTotal+item.count,0);
        },
        totalPrice(state){
            return state.cartData.reduce((proTotal,item)=>proTotal+item.count*item.price,0)
        }
  }
})
export default store