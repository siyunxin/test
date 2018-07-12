<template>
    <div class="box">
        <my-header @go-search="goSearch">
            <span>本单位关联方名单</span>
        </my-header>
        <div class="tab">
            <tab>
                <tab-item >法人/其他组织</tab-item>
                <tab-item >自然人</tab-item>
            </tab>
        </div>
        <div>
            <scroller lock-x use-pullup :pullup-config="pullupConfig" height="-50" @on-pullup-loading="loadMoreData"
                      ref="pullup" use-pulldown :pulldown-config="pulldownConfig" @on-pulldown-loading="refresh" scrollbar-x>

                <div class="infobox" v-for="(item,index) in dataList" :key="index" @click="todetail(index)">
                        <div class="divcom">
                        <x-icon style="vertical-align: middle" type="ios-star-outline" size="30"></x-icon><h3>{{ item.company }}</h3>
                        </div>
                        <div class="">
                        <p>关系类别:   {{ item.relativetype }}</p>
                        <p>状态:   {{ item.state }}</p>
                         </div>

                </div>

            </scroller>
        </div>
    </div>

</template>

<script>
    import MyHeader from '../components/base/mytop'
    import { Tab, TabItem, Scroller,Masker,Group,Cell} from 'vux';

    export default {
        name: "link-list",
        components:{
            Tab,
            TabItem,
            Scroller,
            Masker,
            MyHeader,
            Group,
            Cell
        },
        data(){
            return{
                infoid: 1,
                infocompany:'',
                inforelativetype:'',
                infostate:'',
                dataList:[
                    {
                        "id": 1,
                        "company": "中国人寿（海外）有限责任公司",
                        "relativetype": "直接，间接，共同控制法人",
                        "state": "已确认"
                    },

                ],
                pullupConfig:{
                    content: '上拉加载更多',
                    downContent: '松开进行加载',
                    upContent: '上拉加载更多',
                    loadingContent: '加载中...'
                },
                pulldownConfig:{
                    content: '下拉刷新',
                    downContent: '松开进行加载',
                    upContent: '下拉刷新数据',
                    loadingContent: '加载中...'
                }
            }

        },
        methods:{
            refresh(){

            },
            loadMoreData(){

            },
            goSearch(){
                this.$router.push({ path:'/querylist'})
            },
            todetail(index){
                this.infoid = index
                this.infocompany = this.dataList[index]['company']
                this.inforelativetype = this.dataList[index]['relativetype']
                this.infostate = this.dataList[index]['state']
                this.$router.push({
                    name:'link-details',
                    params:{
                        uid: this.infoid,
                        company: this.infocompany,
                        relativetype: this.inforelativetype,
                        state: this.infostate
                    }
                })
            }

        },
        beforeRouteEnter:function(to,from,next){
            next(function(vm){
                vm.axios.get('/api/db.json').then((res)=>{
                    console.log(res.data)
                    vm.dataList = res.data["linklistData"]
                })
            })
        },
        beforeRouteUpdate:function(to,from,next){
          var app = this;
          this.axios.get('static/res/db.json').then((res)=>{

          })
        },



    }
</script>

<style scoped>
    scroller{
        margin-top: 20px;
    }
    .box{
        background: #F2F2F2;
    }
    .tab{
        margin-top: 1%;
    }
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
        margin-left: 8%
    }



</style>