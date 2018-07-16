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
                <selector  title="选择关联方式" :options="list" v-model="defalutValue" direction="rtl"></selector>
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
                defalutValue: '01',
                    list:[
                    {
                        key: '01',
                        value: '中国人寿1'
                    },
                    {
                        key: '02',
                        value: '中国人寿2'
                    }
                ]
            }

        }

    }
</script>

<style scoped>

</style>