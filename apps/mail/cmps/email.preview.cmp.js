import emailDetails from './email-details.cmp.js';

{/* <router-link :to="emailDetailsLink"> */ }

// </router-link>


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
            // emailId=this.email.id
           
        }
    },
    methods: {

        openEmail() {
            console.log(this.email);
            // this.opened=true
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