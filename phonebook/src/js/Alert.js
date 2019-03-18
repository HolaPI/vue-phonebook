import Vue from 'vue'
import Alert from '../components/Alert.vue'

var myAlert = (function(){
    var defaults = {
        title : "Message Box",
        body : "Here's a telephone number",
        cancel : null,
        confirm : null
    };
    var myComponent = Vue.extend(Alert);
    return function(opts){
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }
        var vm = new myComponent({
            el : document.createElement("div"),
            data : {
                customTitle : defaults.title,
                userTele : defaults.body,
                cancel : defaults.cancel,
                confirm : defaults.confirm
            }
        });
        document.body.appendChild(vm.$el)
    }
})();

export default myAlert