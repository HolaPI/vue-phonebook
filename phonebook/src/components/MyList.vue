<template>
    <div id="list">
        <ul class="user_list" ref="listUser" @touchmove="bMove = true">
            <li v-for="item in userData" :key="item.index">
                <p>{{ item.index }}</p>
                <ul>
                    <li @touchend="showTele(user.tele)" v-for="user in item.users" :key="user.name">{{ user.name }}</li>
                </ul>
            </li>
        </ul>
        <ul class="user_index" ref="listIndex">
            <li @touchstart="setScroll" v-for="item in userIndex" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import myAlert from '../js/Alert.js'
export default {
    name: "my-list",
    data(){
        return {
            bMove : false
        }
    },
    props : {
        "user-data" : {
            type : Array,
            default : function(){
                return [];
            }
        }
    },
    computed : {
        userIndex : function(){
            return this.filterIndex(this.userData);
        }
    },
    methods : {
        filterIndex : function(data){
            var result = [];
            for(var i = 0, len = data.length; i < len; i ++){
                if(data[i].index){
                    result.push(data[i].index);
                }
            }
            return result;
        },
        setListIndexPos : function(){
            var iH = this.$refs.listIndex.offsetHeight;
            this.$refs.listIndex.style.marginTop = - iH / 2 + "px";
        },
        setScroll : function(e){
            var oP = this.$refs.listUser.getElementsByTagName("p");
            for(var i = 0, len = oP.length; i < len; i ++){
                if(oP[i].innerText === e.target.innerText){ 
                    document.documentElement.scrollTop = oP[i].offsetTop;
                }
            }
        },
        showTele : function(tele){
            if(!this.bMove){
                myAlert({
                    title : "Call",
                    body : tele,
                    cancel : function(){
                        document.body.removeChild(
                            document.getElementById("alert")
                        );
                    },
                    confirm : function(e){
                        alert("I am Calling " + e.path[2].children[1].innerText);
                        document.body.removeChild(
                            document.getElementById("alert")
                        );
                    }
                });
            }else{
                this.bMove = false;
            }
        }
    },
    mounted : function(){
        this.setListIndexPos();
    }
}
</script>
<style>
#list{
    position: relative;
    top: 40px;
    overflow: hidden;
}
#list .user_list p{
    background-color: #ccc;
    padding: 3px 6px;
}
#list .user_list ul li{
    height: 40px;
    line-height: 40px;
    padding: 6px;
    border-bottom: 1px solid #ccc;
}
#list .user_index{
    position: fixed;
    right: 8px;
    top: 50%;
    font-size: 20px;
}
#list .user_index li{
    margin: 5px 0px;
}
</style>


