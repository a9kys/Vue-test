<template>
    <div>
        <h5>Question 5</h5>
        <div id="test-container" >
            Change my attributes
        </div>
        <br/>
        <button @click="isError=true">Set error</button>
        <button @click="isBold=true">Set bold</button>
        <button @click="reset">Reset</button>
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
