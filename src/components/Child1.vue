<template>
    <div>
        Child's rating : {{rating}}  <button  @click.stop="updateRating"> Increase rating</button>
        <br/><br/>
        Parent's rating : {{parentRating}}
    </div>
</template>
<script>
export default {
    props:["parentRating"],
    data(){
        return {
            rating:1
        }
    },
    methods:{
        updateRating(){
            this.rating = this.rating + 1;
        }
    }
}
</script>
