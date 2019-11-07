'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js';
import emailLinks from '../cmps/links-side.cmp.js';
import { emailServices } from '../services/email-service.js'
// import composeEmail from '../cmps/email-compose.cmp.js';



export default {
    template: `
            <section class="mail-side">
            <router-link  :to="composeEmail"><button class="compose-btn" >+ Compose</button></router-link>
            <email-links></email-links>
            <h2>status</h2>
            <email-status> </email-status>


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

    methods: {



    },

    created() {


    },
    components: {
        emailStatus,
        emailLinks

    }

}