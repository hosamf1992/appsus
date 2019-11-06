export default {
  template: `
        <section>
            <img :src="value.img" />
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
