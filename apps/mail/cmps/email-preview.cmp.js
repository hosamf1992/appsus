import emailDetails from './email-details.cmp.js';




export default {
    props: ['email'],
    template: `
            <li @click="openEmail,opened=!opened"  class="flex space-around">
                <h1> {{email.sentFrom}}</h1>
                <h1> {{email.subject}}</h1>
                <p>time</p>
                <email-details :opendemail="email" v-if="opened"></email-details>
                </li>
               
        `,

    data() {
        return {
            opened: false,
        
           
        }
    },
    methods: {

        openEmail() {
            console.log(this.email);
           
        }
    },
    created() {
      
    }

    , computed: {

        emailDetailsLink() {
            return `/email/${this.email.id}`
        },

    },
    components: {
        emailDetails,

    }
}