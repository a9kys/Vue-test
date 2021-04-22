<template>
    <div id="parent">
        <h5>Question 4</h5>
        <child2>
             <div slot='parent-header-slot'>
        <h3>Parent Header</h3>
      </div>
       <div slot='parent-body-slot'>
        <body>Parent Body</body>
      </div>
        </child2>
    </div>
</template>
<script>
import Child2 from '../components/Child2'
export default {
    components:{
        Child2
    }
}
</script>
