<template>
  <div>
    <p>Name: {{user.name}}</p>
    <p>Age: {{user.age}}</p>
    <ul>
        <li v-for="(language,index) in user.languages" :key=index>Language:{{ language }}</li>
    </ul>
  </div>
</template>

<script>
export default{
  data:function()
  {
    return {
      user:''
    }
  },
  created()
  {
    this.user=this.$route.params.name;
  }
}
</script>
