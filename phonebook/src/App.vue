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
var userData = [
  {
      "index" : "A",
      "users" : [
          {
              "name" : "a1",
              "tele" : "13512312300"
          },
          {
              "name" : "a2",
              "tele" : "13512312301"
          },
          {
              "name" : "a3",
              "tele" : "13512312302"
          }
      ]
  },
  {
      "index" : "B",
      "users" : [
          {
              "name" : "b1",
              "tele" : "13512312303"
          },
          {
              "name" : "b2",
              "tele" : "13512312304"
          },
          {
              "name" : "b3",
              "tele" : "13512312305"
          }
      ]
  },
  {
      "index" : "D",
      "users" : [
          {
              "name" : "d1",
              "tele" : "13500000006"
          },
          {
              "name" : "d2",
              "tele" : "13500000007"
          },
          {
              "name" : "d3",
              "tele" : "13500000008"
          }
      ]
  },{
      "index" : "F",
      "users" : [
          {
              "name" : "f1",
              "tele" : "13500000009"
          },
          {
              "name" : "f2",
              "tele" : "13500000010"
          }
      ]
  },
  {
      "index" : "H",
      "users" : [
          {
              "name" : "h1",
              "tele" : "13500000011"
          },
          {
              "name" : "h2",
              "tele" : "13500000012"
          },
          {
              "name" : "h3",
              "tele" : "13500000013"
          }
      ]
  },
  {
      "index" : "L",
      "users" : [
          {
              "name" : "l1",
              "tele" : "13500000014"
          },
          {
              "name" : "l2",
              "tele" : "13500000015"
          },
          {
              "name" : "l3",
              "tele" : "13500000016"
          }
      ]
  },
  {
      "index" : "W",
      "users" : [
          {
              "name" : "w1",
              "tele" : "13500000017"
          },
          {
              "name" : "w2",
              "tele" : "13500000018"
          },
          {
              "name" : "w3",
              "tele" : "13500000019"
          },
          {
              "name" : "w4",
              "tele" : "13500000020"
          },
          {
              "name" : "w5",
              "tele" : "13500000021"
          }
      ]
  }
];
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
