'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js';
import emailLinks from '../cmps/links-side.cmp.js';



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