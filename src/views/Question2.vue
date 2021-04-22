<template>
<!-- This is component P -->
    <div>
        <h5>Question 2</h5>
        
        <child1 :parentRating="rating" @increaseParent="updateParent($event)" ></child1>
    </div>
</template>
<script>
import Child1 from "../components/Child1"
export default {
    data(){
        return {
            rating:1
        }
    },
    methods:
    {
        updateParent(updatedRating)
        {
            this.rating=updatedRating;
        }
    },
    components:{
        Child1
    }
}
</script>
