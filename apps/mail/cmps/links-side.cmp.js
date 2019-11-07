
import { emailServices } from '../services/email-service.js'



export default {

    template: `
    <section >
        <div> <router-link :to="inboxLink"> Inbox </router-link>  </div>
        <div> <h2><span>☆</span> Starred </h2>
        </div>

          </section>
               
        `,

    data() {
        return {


        }
    },
    methods: {
        inboxLink() {

            return `/email/list`


        }


    },
    created() {

    }

    , computed: {


    },
    components: {

    }
}