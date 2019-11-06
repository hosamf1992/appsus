export default {
  template: `
        <section>
           <h1>
                {{value.content}}
            </h1>
            <button @click="removeNote(value.id)">x</button>
        
        </section>
        `,
  props: ["value"],
  
  methods: {
        removeNote(noteId) {
            console.log(noteId)
        }
    },
  computed: {
    
  }
};
