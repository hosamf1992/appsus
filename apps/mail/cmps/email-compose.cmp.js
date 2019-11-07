import { emailServices } from '../services/email-service.js'



export default {
   
    template: `
    <section class="email-form">
     <h1>New Message</h1>
    <form @submit.prevent="send">
    <input  type="text" placeholder="To:" v-model="newMail.to" />
    <input  type="text" placeholder="From:" v-model="newMail.from" />
    <input  type="text" placeholder="Bcc:" v-model="newMail.bcc" />
    <input  type="text" placeholder="Subject:" v-model="newMail.subject" />

 
    <textarea placeholder="Body" v-model="newMail.body" ></textarea>
    
    <button >Send</button>
  

</form>
<button >Delete</button>
    </section>
    `,

    data() {
        return {
            newMail: {
                to: '',
                from: '',
                bcc: '',
                body: '',
                subject: '',
            }
        }
    },
    created() {


    }

    , computed: {


    },

    methods: {
        send() {
            
            emailServices.sendEmail(this.newMail);
        }
    },
    components: {


    }
}