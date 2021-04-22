<template>
    <div>
        <h5>Question 5</h5>
        <div id="test-container">
            <div :class="{ 'red' :isError,'bold':isBold }">
            Change my attributes
        <br/>
        <button @click="isError=true">Set error</button>
        <button @click="isBold=true">Set bold</button>
        <button @click="reset">Reset</button>
    </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isError:false,
            isBold:false
        }
    },
    methods:{
        reset(){
            this.isError = false;
            this.isBold = false;
        }
    }
}
</script>

<style scoped>
.red{
  color:red;
}
.bold{
font-weight:bold;
}
</style>
