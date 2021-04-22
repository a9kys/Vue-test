<template>
    <div>
        <h5>Question 1</h5>
        <label>Original Price:</label>
        <input v-model="originalPrice">
         <label>Discount:</label>
         <input v-model="discount">
         <p>SalePrice:{{salePrice}}</p>

    </div>
</template>
<script>
export default {
    // update the model with data here
    data()
    {
      return {
          originalPrice:'',
          discount:''
      }
    },
    computed:
    {
      salePrice()
      {
          return this.originalPrice-this.discount;
      }
    }
}
</script>

