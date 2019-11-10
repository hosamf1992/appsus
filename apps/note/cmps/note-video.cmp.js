'use strict'

export default {
  template: `
        <section class="note" :style="{ backgroundColor: value.bgc}">
          <div>
          

     


            <iframe width="200" height="200" :src="value.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div>{{value.content}}</div>
            <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
          </div>
        </section>
        `,
  props: ["value"],
};


{/* <iframe width="200" height="200"
:src="value.video">
    </iframe>  */}