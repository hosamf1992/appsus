export default {
  template: `
        <section>
            <h2>{{value.content}}</h2>
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
