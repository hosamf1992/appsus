'use strict'

export default {
    template: `
        <section class="note-list-container"> 
        <p>{note}</p>
        </section>
    `,
    data() {
        return{
         note: 1233
        }
     
   
    },
    methods: {  
    },
    computed: {
    },
    created(){
    console.log('hi')
    },
    components: {
     
    }
}
