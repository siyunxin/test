<template>
  <div>
    <group class="textarea">
      <x-textarea placeholder="请输入" v-model="value"></x-textarea>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="primary">同意</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" link="BACK">后退</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { XTextarea,Group,XButton ,Flexbox, FlexboxItem} from 'vux'

  export default {
    data(){
      return{
        value:""
      }
    },
    components: {
      XTextarea,
      Group,
      XButton,
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style  lang="stylus" scoped>
  .textarea{
    margin-bottom :18px
  }

</style>
