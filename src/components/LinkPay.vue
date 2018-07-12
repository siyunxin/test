<template>
    <div class="paybox">
        <my-header @go-search="goSearch">
            关联交易
        </my-header>
        <div class="">

            <scroller lock-x use-pullup :pullup-config="pullupConfig" height="-50" @on-pullup-loading="loadMoreData"
                      ref="pullup" use-pulldown :pulldown-config="pulldownConfig" @on-pulldown-loading="refresh" scrollbar-x>
                <div class="conbox" v-for="(item,index) in datalist" :key="index">
                    <div>
                        <h3>{{ item.label }}</h3>
                    </div>
                    <div>
                        <span>发起人: {{ item.sponsor }}</span>  <span class="amount">交易金额： {{ item.sum }}</span><br>
                        <span>交易类别：{{ item.type }}</span>
                    </div>
                </div>
            </scroller>

        </div>
    </div>
</template>

<script>
    import MyHeader from '../components/base/mytop'
    import { XHeader,Scroller } from 'vux';
    export default {
        name: "link-pay",
        components: {
            MyHeader,
            Scroller
        },
        data(){
            return{
                datalist:[
                    {
                        "id": 1,
                        "label": "中国人寿关联交易管理系统委托开发合同",
                        "sponsor": "张三",
                        "sum": 45,
                        "type": "信息技术服务"
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
            goSearch(){
                this.$router.push({ path:'/payinfo'})
            },
            loadMoreData(){},
            refresh(){}
        },
        beforeRouteEnter:function(to,from,next){
            next(function(vm){
                vm.axios.get('/api/db.json').then((res)=>{
                    console.log(res.data)
                    vm.datalist = res.data["paylistData"]
                })
            })
        },
        // beforeRouteUpdate:function(to,from,next){
        //     var app = this;
        //
        // }
    }
</script>

<style scoped>
    .paybox{
        background: #F2F2F2;
    }
    .amount{
        margin-left: 20%;
    }
    .conbox{
        padding: 15px;
        margin-top: 8px;
        background: white;
    }
</style>