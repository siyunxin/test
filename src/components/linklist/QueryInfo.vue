<template>
    <div>
        <div class="querybox">
            <x-header>
                各集团各单位关联方名单
            </x-header>
        </div>
        <div class="querylist">
           <group>
               <selector  title="选择单位" placeholer="请选择" :options="list" direction="rtl"></selector>
               <selector  title="选择关联方式" :options="way" direction="rtl"></selector>
               <x-input title="输入查询关键字" placeholer="请输入关联信息" text-align="right"></x-input>
           </group>
            <box>
                <x-button type="primary">查询</x-button>
            </box>
        </div>
    </div>
</template>

<script>
    import { XHeader,Selector,Group,XInput,XButton,Box } from 'vux';
    export default {
        name: "query-info",
        components: {
            XHeader,
            Selector,
            Group,
            XInput,
            XButton,
            Box
        },
        data(){
            return{

                list:[

                    {
                        key: '02',
                        value: '中国人寿2'
                    },
                    {
                        key: '02',
                        value: '中国人寿2'
                    }
                ],
                way:[
                    {
                        id: '01',
                        value: '法人/其他组织'
                    },
                    {
                        id:'02',
                        value: '自然人'
                    }
                ]
            }
        },
        methods:{
            getCompany(){
                this.axios.get('/static/mock/db.json').then((res)=>{


                })

            }
        },
        mounted(){
            this.getCompany()

        }
    }
</script>

<style scoped>

</style>