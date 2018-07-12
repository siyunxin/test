<template>
  <div>
    <group>
      <cell-box class="cell" >
        法人名称：保险职业学院
      </cell-box>
      <cell-box  class="cell">
       社会信用代码：65132132564
      </cell-box>
      <cell-box  class="cell">
      股东信息：保险职业学院（5%）
      </cell-box>
      <cell-box  class="cell">
        董监高信息：
      </cell-box>
      <cell-box  class="cell">
        杨明生（董事长）
      </cell-box>
      <cell-box  class="cell">
        恩艳霞（总经理）
      </cell-box>
    </group>
  </div>
</template>

<script>
  import { CellBox,Group } from 'vux'

  export default {
    props: {
      message: Array
    },
    components: {
      CellBox,
      Group
    },

  }

</script>

<style  lang="stylus" scoped>
 .cell{
   margin-bottom :8px;
   margin-top :8px
 }

</style>
