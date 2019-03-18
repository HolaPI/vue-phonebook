<template>
  <div id="app">
    <my-header custom-title="Phonebook" custom-fixed>
        <button slot="left" @touchstart="backBtn">Back</button>
        <button slot="right" @touchstart="homeBtn">Home</button>
    </my-header>
    <my-list :user-data="userData"></my-list>
  </div>
  
</template>

<script>
import userData from './assets/data/userData.js'
export default {
  name: 'app',
  data: function(){
    return {
      userData : userData
    }
  },
  methods : {
      backBtn : function(){
          alert("OK, we are back");
      },
      homeBtn : function(){
          alert("Wow, we are home now");
      }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
</style>
