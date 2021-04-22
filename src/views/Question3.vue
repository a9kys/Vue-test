<template>
<div>
    {{names}}
    </div>
</template>
<script>
export default {
    data:function()
    {
        return {
            names:0
        }

    },
    beforeCreate()
    {
      alert('I am being created');
    },
    created()
    {
        alert('I am created');
    },
    beforeMount()
    {
        alert('I am about to be introduced to the DOM');
    },
    mounted()
    {
        alert('I am in the DOM');
    },
    beforeDestroy()
    {
        this.names=null;
        delete this.names;
        alert('I am destroyed');
    }
}
</script>