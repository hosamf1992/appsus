'use strict'

export default {
  template: `
        <section class="note" :style="{ backgroundColor: value.bgc}">
          <div>
            <img class="note-img" :src="value.img" />
            <div>{{value.content}}</div>
            <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
          </div>
        </section>
        `,
  props: ["value"],
};
