import emailDetails from './email-details.cmp.js';
import { emailServices } from '../services/email-service.js'




export default {
    props: ['email'],
    template: `
            <li @click="openEmail" class="grid">
          
                <h1>  <span @click.stop="starEmail(email.id)" :class="{ red: email.isStarred,}" class="email-star">☆</span> {{email.sentFrom}}</h1>
                <h1> {{email.subject}}</h1>
                <p>{{email.sentAt.hours}}:{{email.sentAt.mins}}</p>
                <email-details @close="closeEmail" :opendemail="email" v-if="opened"></email-details>
                </li>
               
        `,

    data() {
        return {
            opened: false,


        }
    },
    methods: {

        openEmail() {

            this.opened = !this.opened;
            emailServices.markRead(this.email.id, 'read')
                .then(eventBus.$emit('change-status', 'status'))

        },
        starEmail(id) {

            emailServices.markStar(id).then(console.log('star'))
        },

        closeEmail(val){
            this.opened=val
            console.log(val)
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