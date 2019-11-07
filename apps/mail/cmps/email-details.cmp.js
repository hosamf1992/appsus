
import { emailServices } from '../services/email-service.js';

export default {
    props: ['opendemail'],
    template: `
        <li class="list-none opened-email" >
            <h1> {{opendemail.subject}}</h1>
            <h2> {{opendemail.sentFrom}}</h2>
            <p> {{opendemail.email}}</p>
            <p> {{opendemail.body}}</h1>
            <p>time</p>
          
        </li>
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

      

    },

    created() {
      


    }
}