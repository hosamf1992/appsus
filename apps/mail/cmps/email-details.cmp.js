
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
       
        expandEmail(){
            console.log(this.opendemail.id)

            console.log('ffff')
            // eventBus.$emit('Id', payLoad);
            return `details/${this.opendemail.id}`
           

        }
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