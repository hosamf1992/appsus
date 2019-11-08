'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js';
import emailLinks from '../cmps/links-side.cmp.js';



export default {
    template: `
            <section class="mail-side">
           
           
            <div class="flex justify-center">
            <router-link  :to="composeEmail"><button class="compose-btn" >+ Compose</button></router-link>
            </div>
          
          
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
            return `/email/compose`
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