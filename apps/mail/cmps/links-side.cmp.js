
import { emailServices } from '../services/email-service.js'


{/* <div> <router-link :to="inboxLink"> Inbox </router-link>  </div>
<div @click="filterStared"> <h2><span>☆</span> Starred </h2> */}

export default {

    template: `
    <section >
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
        // filterStared(){

           
        

    },
    components: {

    }
}