<template>
    <div class="payinfobox">
        <div>
          <x-header>
              关联交易查询
          </x-header>
        </div>
        <div>
            <group>
                <x-input type="text" title="交易名称" text-align="right"></x-input>
                <x-input type="text" title="交易对手" text-align="right"></x-input>

                <selector placeholder="请选择关联方式" v-model="demo1" title="关联方式" name="district" direction="rtl" :options="way" @on-change="onChange"></selector>
            </group>
            <x-button type="primary">
                查询
            </x-button>

        </div>
    </div>
</template>

<script>
    import { XHeader,XInput,Group,Selector,XButton } from 'vux'
    export default {
        name: "pay-info",
        components:{
            XHeader,
            XInput,
            Group,
            Selector,
            XButton
        },
        data(){
            return{
                demo1:'法人/其他组织',

                way:['法人/其他组织','自然人']
            }

        },
        methods:{
            onChange(){

            }
        }

    }
</script>

<style scoped>

</style>