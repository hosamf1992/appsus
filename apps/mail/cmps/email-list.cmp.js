import emailPreview from './email-preview.cmp.js';



export default {
    props: ['emails'],
    template: `
    <section class="email-list-container">
        <ul >

           <email-preview  v-for="currEmail in results" :key="currEmail.id"  :email="currEmail"></email-preview> 
   
        </ul>
    </section>
    `,

    data() {
        return {
            results: []
        }
    },
    created() {
        this.results = this.emails;
        console.log(this.results)
       
    }

    ,computed: {


    },
    components: {
        emailPreview,

    }
}