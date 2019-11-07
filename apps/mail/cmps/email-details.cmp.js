
import { emailServices } from '../services/email-service.js';

export default {
    props: ['opendemail'],
    template: `
        <div class="list-none opened-email" >
            <h1> {{opendemail.subject}}</h1>
            <h2> {{opendemail.sentFrom}}</h2>
            <p> {{opendemail.email}}</p>
            <p> {{opendemail.body}}</p>
           
            <button @click.stop="deleteEmail(opendemail.id)">delete</button>
            <button @click.stop="markEmail(opendemail.id)">Mark</button>

           
          
        </div>
    `,

    data() {
        return {
            emailId: '',
            email: '',

        }
    },
    computed: {

    },

    methods: {

        deleteEmail(id) {
            emailServices.removeEmail(id).then(console.log('removed'))
        },

        markEmail(id) {
            emailServices.markRead(id).then(console.log('email marked '))

        },



    },

    created() {



    }
}