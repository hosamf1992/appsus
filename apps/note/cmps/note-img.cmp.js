import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note">
          <div>
            <img :src="value.img" />
            {{value.content}}
            <button v-if="value.isPinned"><img src="img/note/pin-red.jpg"></button> 
          </div>
        </section>
        `,
  props: ["value"],
  
  methods: {

    },
  computed: {
    
  }
};
