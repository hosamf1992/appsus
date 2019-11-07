'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js';
import {emailServices } from '../services/email-service.js'
// import composeEmail from '../cmps/email-compose.cmp.js';



export default {
    template: `
            <section class="mail-side">
            <email-status :status="emailStatus"> </email-status>
            <router-link  :to="composeEmail"><button >+ Compose</button></router-link>
            <router-view></router-view>


            </section>
    `,
    data() {
        return {
         isComposed:true,
        }
    },
    computed: {
        
        emailStatus() {
            return emailServices.readMailStatus();
          },
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
        // composeEmail

    }

}