import { emailServices } from '../services/email-service.js'



export default {

    template: `
    <section class="email-form">
     <h1>New Message</h1>
    <form class="email-form grid" @submit.prevent="send">
    <input  type="text" placeholder="To:" v-model="newMail.to" />
    <input  type="text" placeholder="From:" v-model="newMail.from" />
    <input  type="text" placeholder="Bcc:" v-model="newMail.bcc" />
    <input  type="text" placeholder="Subject:" v-model="newMail.subject" />

 
    <textarea class="area-txt" placeholder="Body" v-model="newMail.body" ></textarea>
    
    <button >Send</button>
  

</form>
 <router-link :to="deleteEmail"> <button >Delete</button> </router-link>

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
        deleteEmail() {
            console.log('delete')
            return `/email/list`
        },


    },

    methods: {
        send() {
            if (this.newMail.to === '' || this.newMail.subject === '' || this.newMail.body === '') return;


            emailServices.sendEmail(this.newMail).then(
                console.log('email sent'),
            );
            this.$router.push('list')


        }

    },
    components: {


    }
}