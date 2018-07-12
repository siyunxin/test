<template>
  <div>
    <company-head></company-head>
    <company-base-info :message="message"></company-base-info>
    <company-textarea></company-textarea>
  </div>
</template>

<script>
  import CompanyHead from '@/components/company/head.vue'
  import CompanyBaseInfo from '@/components/company/baseinfo.vue'
  import CompanyTextarea from '@/components/company/textarea.vue'
  // import axios from 'axios'
   export default {
     data(){
       return{
         message:[],
       }
     },
     components: {
      CompanyHead,
      CompanyBaseInfo,
      CompanyTextarea
     },
     methods:{
       getConpanyInfo(){
         this.axios.get('/api/company.json', {
           params: {
             id: this.$route.params.id
           }
         })
           .then(this.getConpanyInfoSucc)
       },
       getConpanyInfoSucc(res){
           res = res.data
           const data = res.data
           this.message =data.work;
       }
     },
     mounted (){
       this.getConpanyInfo()

     },

   }
</script>

<style lang="stylus" scoped>

</style>
