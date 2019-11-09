
import { emailServices } from '../services/email-service.js';

export default {
    template: `
.email-expanded{
    <section class="email-expanded" >

    <h2> Sent From: {{email.sentFrom}} </h2>
    <h2> Email: {{email.email}}  </h2>
    <h2> Subject: <span v-if="replyClicked">Re:</span> {{email.subject}}  </h2>
    <p v-if="show"> Body: {{email.body}}  </p>
    <textarea v-model="replyTxt" class="reply-area" v-if="isEdit"> {{email.body}}  </textarea>
    <div>
    <router-link :to="backToList"> <button class="mails-btn" >Back</button> </router-link>
      <button class="mails-btn" v-if="!replyClicked" @click="reply" >Replay</button>
      <button class="mails-btn" v-if="replyClicked" @click="sendreply" >Send</button>
    </div>
    <div class="border-bottom"></div>
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