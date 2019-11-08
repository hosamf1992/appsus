
import { emailServices } from '../services/email-service.js';

export default {
    props: ['opendemail'],
    template: `
        <div class="list-none opened-email" >
         <h2>Subject: {{opendemail.subject}}</h2>
            <h2>from: {{opendemail.sentFrom}}</h2>
         
            <p>Email: {{opendemail.email}}</p>
            <p> {{opendemail.body}}</p>
           
            <button @click.stop="deleteEmail(opendemail.id)">delete</button>
          <button @click.stop="markEmail(opendemail.id)">Mark Unread</button>
            <router-link :to="expandEmail"> <button >Expand</button> </router-link>


            <router-view></router-view>

          
        </div>
    `,

    data() {
        return {
            emailId: '',
            email: '',

        }
    },
    computed: {

        expandEmail() {
            console.log(this.opendemail.id)

         

            return `details/${this.opendemail.id}`


        }
    },

    methods: {

        deleteEmail(id) {
            emailServices.removeEmail(id).then(console.log('removed'))
            eventBus.$emit('change-status', 'status');
        },

        markEmail(id) {
            emailServices.markRead(id, 'unread').then
            (eventBus.$emit('change-status', 'status'),
        
            )
            this.$emit('close', false)

        },





    },

    created() {



    }
}