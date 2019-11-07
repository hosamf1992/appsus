
import { emailServices } from '../services/email-service.js';

export default {
    template: `
        <section >
    <h2> Sent From: {{email.sentFrom}} </h2>
    <h2> Email: {{email.email}}  </h2>
    <h2> Subject: {{email.email}}  </h2>
    <p> Body: {{email.body}}  </p>
    <router-link :to="backToList"> <button >Back</button> </router-link>

    
        </section>
    `,

    data() {
        return {
          
            email: null,

        }
    },
    computed: {
        backToList(){
            return `/email/list`
        }
    },

    methods: {

        



    },

    created() {

        const emailIdx = this.$route.params.id;
        console.log(emailIdx)
        emailServices.getEmailById(emailIdx)
            .then(currEmail => this.email = currEmail);


    }
}