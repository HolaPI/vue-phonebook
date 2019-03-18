<template>
    <div id="header" :style="{ 'position' : customFixed ? 'fixed' : 'static' }">
        <slot name="left"></slot>
        <span>{{ customTitle }}</span>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name : "my-header",
    props : {
        "customTitle" : {
            type : String,
            default : "Title"
        },
        "customFixed" : {
            type : Boolean,
            default : false
        }
    }
}
</script>

<style>
#header{
    width: 100%;
    height: 40px;
    background-color: #aaa;
    color: #fff;
    text-align: center;
    line-height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}
#header button{
    height: 100%;
    padding: 0 5px;
}
#header button:nth-of-type(1){
    float: left;   
}
#header button:nth-of-type(2){
    float: right;
}
</style>


