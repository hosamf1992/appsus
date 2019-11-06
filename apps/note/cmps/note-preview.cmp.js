'use strict';


//Delete

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <section class="note-preview-container">
            <router-link :to="noteDetailsLink">
                <p>Note Content: {{ note.content }}</p> 
                <p>Complete By: {{note.completeBy}}</p>
                <img :src="note.img"/>
            </router-link>
        </section>
    `,
    computed: {
        noteDetailsLink() {
            return `/note/${this.note.id}`
        }
        
    }
}
