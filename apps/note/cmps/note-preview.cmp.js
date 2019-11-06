'use strict';


//add link 

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <section class="note-preview-container">
                <p>Note Content: {{ note.content }}</p> 
                <p>Complete By: {{note.completeBy}}</p>
                <img :src="note.img"/>
         
        </section>
    `,
    computed: {
        
    }
}

//<router-link :to="noteDetailsLink">
//</router-link>

// noteDetailsLink() {
//     return `/note/${this.note.id}`
// }

