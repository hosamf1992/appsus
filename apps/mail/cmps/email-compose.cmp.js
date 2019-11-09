import { emailServices } from '../services/email-service.js'



export default {

    template: `
    <section class="email-form">
    <form class="email-form grid" @submit.prevent="send">
    <div class="flex compose-bar align-center">
    <h1 class="form-title">New Message</h1>
    </div>
    <input  type="text" placeholder="To:" v-model="newMail.to" />
    <input  type="text" placeholder="From:" v-model="newMail.from" />
    <input  type="text" placeholder="Bcc:" v-model="newMail.bcc" />
    <input  type="text" placeholder="Subject:" v-model="newMail.subject" />

 
    <textarea class="area-txt" placeholder="Body" v-model="newMail.body" ></textarea>
    <div class="flex space-between align-center">
    <button class="mails-btn">Send</button>
    <router-link :to="deleteEmail">
    <i class="fa fa-trash form-trash" aria-hidden="true"></i>

  
    
    
    </router-link>
    </div>
    <div class="border-bottom"></div>

</form>

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
            eventBus.$emit('change-status', 'status');
            this.$router.push('list')


        }

    },
    components: {


    }
}