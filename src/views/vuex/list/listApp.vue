<template>
    <div>
        <hb-head headfont="vuex数据管理"></hb-head>
        <group>
            <div v-for="item in demoData">{{item}}</div>
        </group>
    </div>

</template>

<script type="text/ecmascript-6">
    import { Group, Divider } from 'vux'
    import { mapState,mapGetters} from 'vuex'
    import HbHead from 'components/HbHead';
    export default {
        data () {
            return {
            }
        },
        //已成功挂载，相当ready()
        mounted(){
            this.$store.dispatch('getTestData').then(res => {
            });
        },
        computed: mapState({
            demoData: state => state.main.demoData
        }),
        components: {
            Divider,Group, HbHead
        }

    }
</script>

<style>
</style>