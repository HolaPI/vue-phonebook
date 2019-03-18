<template>
    <div id="alert">
        <div class="alert_content">
            <div class="alert_title">{{ customTitle }}</div>
            <div class="alert_body">{{ userTele }}</div>
            <div class="alert_btn">
                <button  v-if="cancel" @touchstart="cancel">Cancel</button>
                <button  v-if="confirm" @touchstart="confirm">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#alert{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 20;
    display: flex;
}
#alert .alert_content{
    width: 240px;
    height: 150px;
    background-color: #fff;
    border-radius: 5px;
    margin: auto;
    padding: 10px;
}
#alert .alert_title{
    font-weight: bold;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
#alert .alert_body{
    padding: 5px;
    font-size: 20px;
    height: 80px;
    line-height: 80px;
    text-align: center;
}
#alert .alert_btn{
    display: flex;
    justify-content: space-around;
}
#alert .alert_btn button{
    height: 25px;
    width: 60px;
}
</style>
