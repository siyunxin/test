<template>
    <div>
        <my-header>
            <span>详情页面</span>
        </my-header>
        <div>
            <group>
                <cell title="关联单位">{{company}}</cell>
                <cell title="关系类别">{{type}}</cell>
                <cell title="状态">{{state}}</cell>
            </group>
        </div>
    </div>

</template>

<script>
    import MyHeader from '@/components/base/mytop'
    import {Group,Cell} from 'vux'
    export default {
        name: "link-details",
        components:{
        Group,
        Cell,
        MyHeader
        },
        data(){
            return{
                company:'',
                type:'',
                state:''
            }
        },
        // beforeRouteEnter:function(to,from,next){
        //     next(function(vm){
        //         vm.axios.get('/static/res/db.json').then((res)=>{
        //             // console.log(res.data)
        //             var data = res.data['linklistData'];
        //             console.log(data[0].company)
        //
        //         })
        //     })
        // },
        methods:{
          getData(){
              var index = (this.$route.params.id-1);
              console.log("路由传参"+index);

              this.axios.get("/static/mock/db.json").then((res)=>{
                  var data = res.data['linklistData'];
                  this.company=data[index].company
                  this.type = data[index].relativetype
                  this.state = data[index].state
              })

          }
        },
        mounted(){
            this.getData()
        }
    }
</script>

<style scoped>

</style>