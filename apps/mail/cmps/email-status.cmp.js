
import { emailServices } from '../services/email-service.js'



export default {

    template: `
    <section class="email-status">
          <div class="email-outer">
          <span class="text-center status-num ">{{status}}%</span>
          <div :style="{width: status+'%'}" class="email-inner"></div>
        
          </div>

          </section>
               
        `,

    data() {
        return {
            status: null,

        }
    },
    methods: {


    },
    created() {
        emailServices.readMailStatus()
            .then(res => this.status = res);

        eventBus.$on('change-status', (msg) => {

            emailServices.readMailStatus()
                .then(res => this.status = res)
        });

    }

    , computed: {
        emailStatus() {


        },


    },

    watch: {

    },
    components: {

    }
}