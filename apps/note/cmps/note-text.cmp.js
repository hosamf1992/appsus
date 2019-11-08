import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note">
           <h1 class="note-text">
                {{value.content}}
            </h1>
            <button v-if="value.isPinned"><img src="img/note/pin-red.jpg"></button> 
        </section>
        `,
  props: ["value"],
  data () { 
    return {
      
    }

  },
  methods: {

    },
  computed: {
    
  }
};

