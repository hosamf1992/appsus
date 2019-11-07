
import {emailServices } from '../services/email-service.js'



export default {
    // props: ['status'],
    template: `
    <section class="email-status">
          <div class="email-outer">
          <span class="text-center status-num ">{{emailStatus}}%</span>
          <div :style="{width: status+'%'}" class="email-inner"></div>
        
          </div>

          </section>
               
        `,

    data() {
        return {
       
           
        }
    },
    methods: {

       
    },
    created() {
       
    }

    , computed: {
        emailStatus() {
                return this.status= emailServices.readMailStatus();
              },

    },
    components: {

    }
}