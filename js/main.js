'use strict';
import appHeader from './main.cmp/app.header.cmp.js';
import userMsg from './main.cmp/user-msg.cmp.js';





Vue.config.productionTip = false

var options = {
    el: '#my-app',
    template: `
   
   <section>
    <app-header>  </app-header>
     <user-msg></user-msg>
</section>
       
            
          
    `,
    data() {
        return {
            
        }
    },
 
  
    components: {
        appHeader,
        userMsg
      
     
    }
}



new Vue(options);


