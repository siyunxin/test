<template>
  <div>
    <database-head :company="company"></database-head>
    <database-swich :company="company" :people="people"></database-swich>
  </div>
</template>

<script>
  import DatabaseHead from '@/components/database/head.vue'
  import DatabaseSwich from '@/components/database/swich.vue'
  import axios from 'axios'
  export default {
    data(){
      return{
        company:[],
        people:[],
      }
    },
    components: {
      DatabaseHead,
      DatabaseSwich
    },methods:{
      getDatabaseInfo(){
        this.axios.get('/api/database.json')
          .then(this.getDtabaseInfoSucc)
      },
      getDtabaseInfoSucc(res){
        res = res.data
        if (res.ret&&res.data){
          const data = res.data
          this.company =data.company;
          this.people =data.people;

        }
      }
    },
    mounted (){
      this.getDatabaseInfo()
    },
  }
</script>
<style scoped>

</style>
