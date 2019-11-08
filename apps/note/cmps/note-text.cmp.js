import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note" 
                :style="{ backgroundColor: value.bgc}">
           <h1 class="note-text">
                {{value.content}}
            </h1>
            <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
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

