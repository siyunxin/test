<template>
    <div>
        <x-header :left-options="{backText: ''}">
            <slot></slot>
            <a slot="right"><x-icon type="ios-search" size="30"
                                    style="fill:#fff;position: relative;top: -3px;" @click="toSearch"></x-icon></a>
        </x-header>
    </div>
</template>
<script>
    import { XHeader } from 'vux'
    export default {
        name: "mytop",
        components:{
            XHeader
        },
        methods:{
            toSearch(){
                this.$emit("go-search")
            }
        }
    }
</script>

<style scoped>

</style>