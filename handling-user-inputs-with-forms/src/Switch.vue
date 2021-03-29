<template>
  <div>
    <span 
      id="on"
      class="input"
      :class="{active: value}"
      @click="switched(true)">
      On
    </span>
    <span id="off"
      class="input"
      :class="{'active': !value}"
      @click="switched(false)">
      Off
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
      },
    },
    methods: {
      switched(value) {
        this.$emit('input',value);
      }
    },
    
  }
</script>

<style scoped>
.input{
  padding: 5px 10px;
  cursor: pointer;
  background-color: #dbdbdb;
}
#on.active{
background-color: green;
color: #fff
}

#off.active{
  background-color: red;
  color: #fff
}
</style>