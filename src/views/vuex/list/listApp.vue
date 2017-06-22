<template>

    <group>
        <div v-for="item in demoData">{{item}}</div>
    </group>
</template>

<script type="text/ecmascript-6">
    import { Group, Divider } from 'vux'
    import { mapState,mapGetters} from 'vuex'
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
            Divider,Group
        }

    }
</script>

<style>
</style>