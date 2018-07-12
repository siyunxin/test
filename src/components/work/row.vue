<template>
  <div>
    <router-link v-for="(item,index) in message" :to="'/company/' + item.id" :key="index">
      <grid  >
        <grid-item  v-for="i in 1" :key="1" class="group" >
          <div class="Frow">
            <span>来源：{{item.from}}</span>
            <span class="time">接收时间：{{item.time}}</span>
          </div>
          <div class="Srow">
            {{item.company}}
          </div>
          <div class="Trow">
           {{item.type}}
          </div>
        </grid-item>
      </grid>
    </router-link>
  </div>
</template>

<script>
  import { Grid, GridItem } from 'vux'

  export default {
    name:'row',
    props: {
      message: Array
    },
    components: {
      Grid,
      GridItem
    }
  }
  </script>

<style lang="stylus" scoped>
  .Frow{
    font-size :15px;
    margin-bottom: 12px
  }

    .time{
      float: right
    }

  .Srow{
    font-size :19px;
    margin-bottom: 13px
  }

  .Trow{
    font-size :15px;
    float: right
  }

</style>
