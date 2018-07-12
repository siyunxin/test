<template>
  <div>
    <div class="search">
      <x-icon class="icon" type="ios-arrow-back" size="28"></x-icon>
      <input v-model="keyword" class="search-input" type="text" placeholder="法人和其他组织信息库" />
      <x-icon class="icon-s" type="ios-search-strong" size="30"></x-icon>
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <scroller lock-x height="-49px" >
        <div>
          <ul>
            <router-link
              tag="li"
              :to="'/company/' + item.id"
              class="search-item border-bottom"
              v-for="item in list"
              :key="item.id"
            >
              {{item.name}}
            </router-link>
            <li class="search-item border-bottom" v-show="hasNoData">
              没有找到匹配数据
            </li>
          </ul>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  import { XHeader,Scroller } from 'vux'
  export default {
    props: {
      company: Array,
    },
    components: {
      XHeader,
      Scroller
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    watch: {
      keyword () {

        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let value in this.company) {
              if ( this.company[value].name.indexOf(this.keyword) > -1) {
                result.push(this.company[value])
              }

          }
          this.list = result
        }, 100)
      }
    },
}
</script>

<style  lang="stylus" scoped>
  .search{
    height: .90rem;

    background: #cacaca
  }

    .search-input{
      box-sizing: border-box;
      width: 80%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
      background: #cacaca;
      font-size :0.35rem;
      margin-bottom :0.45rem;
    }

    .icon{
      margin-top :0.2rem;
    }

    .icon-s{
      margin-right :0.15rem;
    }

  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
  }

    .search-item{
      line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color: #666;
      height :100%;
    }

</style>
