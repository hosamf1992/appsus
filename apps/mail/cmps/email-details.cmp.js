
import { emailServices } from '../services/email-service.js';

export default {
    props: ['opendemail'],
    template: `
        <div class="list-none opened-email" >
         <h2>Subject: {{opendemail.subject}}</h2>
            <h2>from: {{opendemail.sentFrom}}</h2>
         
            <p>Email: {{opendemail.email}}</p>
            <p> {{subString}}</p>
           
            <button @click.stop="deleteEmail(opendemail.id)">delete</button>
    
            <router-link :to="expandEmail"> <button >Read More</button> </router-link>
    
            <router-view></router-view>

          
        </div>
    `,
    // <button @click.stop="markEmail(opendemail.id)">Mark Unread</button>

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


        },
        subString() {

            let str = this.opendemail.body;
            if (str.length > 100) {

                return str.substring(0, 100) + " ....";
               
              }
               return str;



        },
    },

    methods: {

        deleteEmail(id) {
            emailServices.removeEmail(id).then(console.log('removed'))
            eventBus.$emit('change-status', 'status');
        },

        // markEmail(id) {
        //     emailServices.markRead(id, 'unread').then
        //         (eventBus.$emit('change-status', 'status'),

        //         )
            // this.$emit('close', false)

        

    },

    created() {



    }
}