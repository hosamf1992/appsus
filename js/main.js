'use strict';
import appHeader from './main.cmp/app.header.cmp.js';




Vue.config.productionTip = false

var options = {
    el: '#my-app',
    template: `
   
   
    <app-header>  </app-header>

       
            
          
    `,
    data() {
        return {
            
        }
    },
 
  
    components: {
        appHeader
      
     
    }
}



new Vue(options);


