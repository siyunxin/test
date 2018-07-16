<template>
    <div>
        <tab :line-width=2 v-model="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="100%"  :show-dots="false" style="overflow: auto;height:500px;font-size: 20px" >
            <swiper-item v-for="(item, index) in list2" :key="index" style="overflow:auto;height:auto">
                <div>
                    <scroller lock-x height="-49px" >
                        <div>
                            <router-link tag="div" :to="'/linklist/' + item.id" v-for="(item, index) in info">
                                <div class="infobox">
                                    <div class="divcom">
                                        <x-icon style="vertical-align: middle" type="ios-star-outline" size="30"></x-icon><h3>{{ item.company }}</h3>
                                    </div>
                                    <div class="">
                                        <p>关系类别:   {{ item.relativetype }}</p>
                                        <p>状态:   {{ item.state }}</p>
                                    </div>

                                </div>
                            </router-link>
                        </div>
                    </scroller>
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import { Tab, TabItem, Sticky,Swiper, SwiperItem,Scroller  } from 'vux'
    const list = () => ['法人/其他组织', '自然人']
    export default {
        props: {
            data1: Array,
            data2: Array
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
            this.$watch('data1', function(newVal, oldVal){
                this.info=newVal
            })
        },
        updated(){

            if (this.index==0){
                this.info=this.data1


                 console.log("我是info"+this.info)
            }else{
                this.info=this.data2

            }
            console.log("第几项"+this.index)
        }


    }
</script>
<style  lang="stylus" scoped>

    .infobox{
        padding: 5px;
        margin: 5px auto;
        background: white;
    }
    .divcom{
        height: 30px;
        line-height: 30px;
        /*vertical-align: middle;*/
    }
    .infobox h3{
        vertical-align: middle;
        display: inline-block;
    }
    .infobox p{
        margin-left: 8%;
        font-size: 15px;
    }



</style>
