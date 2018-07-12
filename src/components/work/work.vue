<template>
  <div>
    <work-head></work-head>
    <work-row :message="message"></work-row>
  </div>
</template>

<script>
  import WorkHead from '@/components/work/head.vue'
  import WorkRow from '@/components/work/row.vue'
  import axios from 'axios'
  export default {
    name:'work',

    data(){
      return{
        message:[],
      }
    },
    components: {
      WorkHead,
      WorkRow
    },
    methods:{
      getWorkInfo(){
        this.axios.get('/static/mock/daiban.json')
          .then(this.getWorkInfoSucc)
      },
      getWorkInfoSucc(res){
        res = res.data
        if (res.ret&&res.data){
          const data = res.data
          this.message =data.work;

        }
      }
    },
    mounted (){
      this.getWorkInfo()
    },
  }
</script>

<style  lang="stylus" scoped>

</style>
