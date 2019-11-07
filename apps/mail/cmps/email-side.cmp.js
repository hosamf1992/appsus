'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js';
import {emailServices } from '../services/email-service.js'
// import composeEmail from '../cmps/email-compose.cmp.js';


{/* <email-status :status="emailStatus"> </email-status> */}

export default {
    template: `
            <section class="mail-side">
            <email-status> </email-status>
            <router-link  :to="composeEmail"><button >+ Compose</button></router-link>


            </section>
    `,
    data() {
        return {
        
        }
    },
    computed: {
        
        // emailStatus() {
        //     return emailServices.readMailStatus();
        //   },
          composeEmail() {
            return `/email/compose`
        },
    },

    methods:{

       
       
    },

    created() {
   
       
    },
    components: {
        emailStatus,

    }

}