<template>
    <div><span :class="{ 'top-most-item': index == 0 }">{{myItem}}</span></div>
</template>
<script>
export default {
    props: ['index','item'],
    data: function() {
        return {
            myItem:null
        }
    },
    mounted() {
        this.myItem = this.item;
    },
    //  computed:
    // {
    //     updateArray:function()
    //     {
    //      return this.myItem=this.item
    //     }
    // }
}
</script>
