// 组件模板
<template>
    <div>
    <!-- <Calender /> -->
    <calender2 />
    </div>
</template>
<script>
// import Calender from './Calender';
import Calender2 from './Calender2'
export default {
    data(){
        return{
            msg:'肖战'
        }
    },
    components:{
        // Calender,
        Calender2
    }
}
</script>
<style>
</style>
