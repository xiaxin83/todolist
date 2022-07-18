<template>
   <div class="homepage">
    <todo-content></todo-content>
   </div>
</template>
<script>
import todoContent from './todoContent.vue';
export default {
   name: 'Home',
   components: {
    todoContent
   },
   mixins: [],

   data() {
     return {
       
     }
   },
 
};
</script>
<style lang='less' scoped>
.homepage {
    position: relative;
    width: 100vm;
    height: 100vh;
    // padding-top: 40px;
    background-color: #FFB4B7;

}
</style>