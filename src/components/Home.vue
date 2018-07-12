<template>
    <div>
        <group>
            <cell is-link title="代办处理" link="/gtasks"></cell>
            <cell is-link title="信息库" link="/infobase"></cell>
            <cell is-link title="关联方名单" link="/linklist"></cell>
            <cell is-link title="关联交易" link="linkpay"></cell>
        </group>
    </div>
</template>

<script>
    import { Tabbar,TabbarItem,Group,Cell } from 'vux';
    export default {
        name: "home",
        components:{
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }
    }
</script>

<style scoped>

</style>