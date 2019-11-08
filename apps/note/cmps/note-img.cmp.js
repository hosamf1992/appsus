import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note" :style="{ backgroundColor: value.bgc}">>
          <div>
            <img :src="value.img" />
            {{value.content}}
            <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
          </div>
        </section>
        `,
  props: ["value"],
  
  methods: {

    },
  computed: {
    
  }
};
