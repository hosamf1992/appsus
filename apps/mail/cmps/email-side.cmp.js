'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js';
import emailLinks from '../cmps/links-side.cmp.js';


export default {
    template: `

         

            <section class="mail-side flex align-center  flex-col">
            
            <router-link class="text-decor flex align-center justify-center compose" :to="composeEmail">
              <i class="fas fa-plus"></i>
             <span class="txt-links"> Compose</span>
            </router-link>
            <email-links></email-links>
            <email-status> </email-status>
            </section>
           
          
    `,
    data() {
        return {
        
        }
    },
    computed: {

        composeEmail() {
            return `/email/compose/?`
        },

        
    },

    methods: {
       
    },

    created() {

       
    
    },
    components: {
        emailStatus,
        emailLinks

    }

}