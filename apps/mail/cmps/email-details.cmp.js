
import { emailServices } from '../services/email-service.js';
import longText from '../../../js/main.cmp/long-text.cmp.js';


export default {
    props: ['opendemail'],
    template: `
        <div class="list-none opened-email" >
         <h2>Subject: {{opendemail.subject}}</h2>
            <h3>from: {{opendemail.sentFrom}}</h3>
         
            <p>Email: {{opendemail.email}}</p>
      
            <long-text :txt="opendemail.body"></long-text>
           
    
            <router-link :to="expandEmail"> <button class="mails-btn" >Read More</button> </router-link>
    
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

        expandEmail() {
            console.log(this.opendemail.id)



            return `details/${this.opendemail.id}`


        },
        subString() {

            let str = this.opendemail.body;
            if (str.length > 100) {

                return str.substring(0, 100) + " ....";
               
              }
               return str;



        },
    },

    methods: {

      

    

        

    },

    created() {



    },
    components:{
        longText,

    }
}