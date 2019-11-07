



export default {
    props: ['status'],
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
          
           
        }
    },
    methods: {

       
    },
    created() {
      
    }

    , computed: {


    },
    components: {

    }
}