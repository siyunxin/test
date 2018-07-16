<template>
    <div>
        <my-head @go-search="goSearch">
           关联方名单
        </my-head>
        <my-tab :data1="data1" :data2="data2"></my-tab>
    </div>
</template>

<script>
    import MyHead from '@/components/base/mytop.vue'
    import MyTab from '@/components/base/mytab.vue'

    export default {
        data(){
            return{
                data1:[],
                data2:[],
            }
        },
        components: {
            MyTab,
           MyHead,

        },methods:{
            // getDatabaseInfo(){
            //     this.axios.get('/api/db.json')
            //         .then((res)=>{
            //             console.log(res.data)
            //             this.data1 = res.data.linklistData
            //             console.log("我是data" + this.data1)
            //         })
            // },
            goSearch(){
                this.$router.push({ path:'/querylist'})
            },

            getDatabaseInfo(){
                this.axios.get('/static/mock/db.json')
                    .then(this.getDtabaseInfoSucc)
            },
            getDtabaseInfoSucc(res){
                if (res.data){
                    this.data1 =res.data.linklistData;
                    this.data2 =res.data.linklistData2;
                    console.log("我是"+this.data2)
                }
            },

        },

        mounted (){
            this.getDatabaseInfo()
        },
    }
</script>
<style scoped>
.search-input{
    background: #cacaca;
    text-align: center;
}
</style>