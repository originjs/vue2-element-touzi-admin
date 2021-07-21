<template>
    <div class="">
        <router-view  v-slot="{ Component }"><transition name="fade">
            <component :is="Component" />
        </transition></router-view>
    </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                
            }
        },
        methods:{
            
        },
        created(){
            
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
