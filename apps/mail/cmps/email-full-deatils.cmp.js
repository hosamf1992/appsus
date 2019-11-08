
import { emailServices } from '../services/email-service.js';

export default {
    template: `
        <section  >
    <h2> Sent From: {{email.sentFrom}} </h2>
    <h2> Email: {{email.email}}  </h2>
    <h2> Subject: <span v-if="replyClicked">Re:</span> {{email.email}}  </h2>
    <p v-if="show"> Body: {{email.body}}  </p>
    <textarea v-model="replyTxt" class="reply-area" v-if="isEdit"> {{email.body}}  </textarea>
    <div>
    <router-link :to="backToList"> <button >Back</button> </router-link>
      <button v-if="!replyClicked" @click="reply" >Replay</button>
      <button v-if="replyClicked" @click="sendreply" >Send</button>
    </div>
        </section>
    `,

    data() {
        return {

            email: '',
            isEdit: false,
            show: true,
            replyClicked: false,
            replyTxt: '',





        }
    },
    computed: {
        backToList() {
            return `/email/list`
        },
      
    },

    methods: {
        reply() {
            this.replyTxt =this.email.body
            this.isEdit = true;
            this.show = false;
            this.replyClicked = true
        },

        sendreply() {
            console.log(this.email.id)
            emailServices.sendReply(this.email.id,this.replyTxt).then('edited');
            return this.$router.push( '/email/list')
                              
        }

    },

    created() {

        const emailIdx = this.$route.params.id;
        emailServices.getEmailById(emailIdx)
            .then(currEmail => this.email = currEmail,

            );


    }
}