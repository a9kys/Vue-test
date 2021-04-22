<template>
    <div>
        <h5>Question 8</h5>
        <div>The top most item of the array is highlighted in <span class="top-most-item">green</span></div>
        <div>Ensure that the top most item matches with the expected value below. Click the add button to get started</div>
        <div>Expected value : {{ topMostItem }}</div>
        <button @click="addToTop()">Add  {{ items.length }} to top</button>
        <div>
            <div>
                <Child3 v-for="(item,index) in items" :key="item" :index=index :item=item ></Child3>
            </div>
        </div>
    </div>
</template>
<script>
import Child3 from "../components/Child3"
export default {
    components:{
        Child3
    },
    data: function () {
        return {
            items: []
        }
    },
    computed:{
        topMostItem(){
            return this.items.length > 0 ? this.items[0] : "-";
        }
    },
    methods: {
        addToTop(){
            this.items.unshift(this.items.length);
        }
    }
}
</script>

<style>
.top-most-item{
    color: green;
    font-weight: bold;
}
</style>