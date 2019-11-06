

'use strict';
import {mailServices} from '../services/email-service.js'

// import bookList from '../cmps/book-list.cmp.js';


Vue.config.productionTip = false



export default {
    template: `
     
      <section>
     <h1 class="email-title" >Hey mail app</h1>
        
        </section>
  
    `,
    data() {
        return{
         
        }
     
   
    },
    methods: {
   
     
        
    },
    computed: {
       
      
      
     
    },
    created(){
  
        mailServices.getMails()
    },
    components: {
     


    }
}




