import emailDetails from './email-details.cmp.js';
import { emailServices } from '../services/email-service.js'




export default {
    props: ['email'],
    template: `
            <li @click="openEmail"  class="flex space-around">
                <h1> {{email.sentFrom}}</h1>
                <h1> {{email.subject}}</h1>
                <p>{{email.sentAt.hours}}:{{email.sentAt.mins}}</p>
                <email-details :opendemail="email" v-if="opened"></email-details>
                </li>
               
        `,

    data() {
        return {
            opened: false,
        
           
        }
    },
    methods: {

        openEmail() {
            
            this.opened=!this.opened

        }
    },
    created() {
      
    }

    , computed: {

        emailDetailsLink() {
            return `/email/${this.email.id}`
        },

    },
    components: {
        emailDetails,

    }
}