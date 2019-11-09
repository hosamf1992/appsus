import theRouter from '../routes.js'

export default {
  router: theRouter,

  template: `
       <section class="main-container">
       <div v-if="isClicked" class="menu-modal">

       <router-link  class="flex align-center justify-center " to="/email/list" >
       <div @click="closeMenu" class="flex flex-col align-center justify-center">
        <i class="fas fa-envelope menu-item"></i>
       <span class="inner-txtmenu">Email</span>
      </div>
      </router-link>

      <router-link class="flex align-center justify-center " to="/keep" >
      <div @click="closeMenu" class="flex flex-col align-center justify-center">
         <i class="fas fa-sticky-note menu-item"></i>
         <span class="inner-txtmenu">Notes</span>
         </div>
         </router-link>

       <div class="flex flex-col align-center justify-center">
        <i class="fas fa-map-marker-alt menu-item"> </i>
        <span class="inner-txtmenu">Map</span>
       </div>

      <div class="flex flex-col align-center justify-center">
       <i class="far fa-calendar-alt menu-item"> </i>
       <span class="inner-txtmenu">Calendar</span>
     </div>

      <div class="flex flex-col align-center justify-center">
       <i class="fab fa-youtube menu-item"></i>
       <span class="inner-txtmenu">Youtube</span>
      </div>

      <div class="flex flex-col align-center justify-center">
       <i class="fas fa-address-card menu-item">  </i>
       <span class="inner-txtmenu">Contacts</span>
     </div>

     <div class="flex flex-col align-center justify-center">
       <i class="fas fa-images menu-item"></i>
       <span class="inner-txtmenu">Photos</span>
     </div>

     <div class="flex flex-col align-center justify-center">
       <i class="fas fa-globe-asia menu-item"></i>
       <span class="inner-txtmenu">Map</span>
     </div>

     <div class="flex flex-col align-center justify-center">
       <i class="far fa-newspaper menu-item"></i>
       <span class="inner-txtmenu">News</span>
     </div>
       
       </div>
       <nav class="main-nav" >
       <h1>Apps Place</h1>
       <button @click="openMenu" id="menu-btn" class="menu-btn" >☰</button>  
      
            
            </nav>
       <router-view></router-view>

    </section>
    `,
  data() {
    return {
      isClicked: false,

    }
  },
  methods: {
    openMenu() {
      this.isClicked = !this.isClicked
    },
    closeMenu() {
      this.isClicked = false
    }
  }

}

