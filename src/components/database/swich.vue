<template>
  <div>
    <tab :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>

        <div>
          <scroller lock-x height="-49px" >
            <div>
              <router-link tag="div" :to="'/company/' + item.id" class="row" v-for="(item, index) in info">
                <x-icon class="i-c" type="ios-circle-outline" size="25"></x-icon>
                <span  style="position: relative;top: -6px">
                  {{item.name}}
                </span>
              </router-link>
            </div>
          </scroller>
        </div>

  </div>
</template>

<script>
  import { Tab, TabItem, Sticky,Swiper, SwiperItem,Scroller  } from 'vux'
  import index from "../../router/index";
  const list = () => ['法人/其他组织', '自然人']
  export default {
    props: {
      company: Array,
      people:Array
    },
    components: {
      Tab,
      TabItem,
      Sticky,
      Swiper,
      SwiperItem,
      Scroller

    },

    data () {
      return {
        index01: 0,
        list2: list(),
        demo2: '法人/其他组织',
        index: 0,
        info:[]
      }
    },
    mounted(){
      this.$watch('company', function(newVal, oldVal){
       this.info=newVal
    })
    },
    updated(){

      if (this.index==0){
          this.info=this.company


      }else{
          this.info=this.people

      }
    }


  }
</script>
<style  lang="stylus" scoped>
  .row{
    margin-bottom :15px;
    margin-top :15px;
    line-height :25px;
    font-size :17px;
    height :30px;
  }


</style>
