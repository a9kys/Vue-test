<template>
  <div>
      <h5>Question 6</h5>
    <div class="container-1">
      <div>Students having id with a multiple of 2</div>
      <div v-for="student in multipleOfTwo" :key="student.id">
        <p>{{student.name}}</p>
        </div>

    </div>
    <div class="container-2">
      <div>Students having id with a multiple of 3</div>
        <div v-for="student in multipleOfThree" :key="student.id">
        <p>{{student.name}}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      students: [
        {
          id: 4,
          name: "Eve"
        },
        {
          id: 2,
          name: "Holt"
        },
        {
          id: 3,
          name: "Morris"
        },
        {
          id: 6,
          name: "Charles"
        },
        {
          id: 9,
          name: "Tracey"
        },
        {
          id: 15,
          name: "Ramos"
        },{
            id:1,
            name:"Sam"
        }
      ]
    };
  },
  computed:
  {
    multipleOfTwo:function()
    {
      return this.students.filter(function(student)
      {
         return (!(student.id & 1))
      })
    },
    multipleOfThree:function()
    {
      return this.students.filter(function(student)
      {
        return ((student.id % 3)==0)
      })
    }
  }
};
</script>
<style>
.container-1{
    min-height:50px;
    background:beige;
    margin:20px;
}
.container-2{
    min-height:50px;
    background:lightblue;
    margin:20px;
}
</style>

