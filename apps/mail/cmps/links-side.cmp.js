
import { emailServices } from '../services/email-service.js'



export default {


    template: `
<section >
  
     <router-link :to="inboxLink"> <h2  @click="reportFilter" > Inbox</h2> </router-link>  
    
    <div @click="filterStared"> <h2> <span>☆</span> Starred </h2>  </div>
   
          </section>
               
        `,

    data() {
        return {
           

        }
    },
    methods: {
        filterStared() {
            eventBus.$emit('filter-me', 'filter');
            // return this.$router.push({ name: '/email/list' })


        },
        reportFilter(){
            eventBus.$emit('inbox-filter', 'filter');
        }


    },
    created() {

    }

    , computed: {
        inboxLink() {
           
            return `/email/list`


        }




    },
    components: {

    }
}