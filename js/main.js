'use strict';
import appHeader from './main.cmp/app.header.cmp.js';




Vue.config.productionTip = false

var options = {
    el: '#my-app',
    template: `
    <section>
    <h1>heyy</h1>
    <app-header>  </app-header>

    </section>
       
            
          
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


