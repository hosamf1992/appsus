'use strict';


//add link 

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <section class="note-preview-container">
            
                <img :src="note.img"/>
                <h3>{{ note.content }}</h3> 
                <p>completeBy: {{note.completeBy}}</p>
         
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

