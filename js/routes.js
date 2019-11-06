
import noteApp from '../apps/note/pages/note-app.cmp.js';
import mailApp from '../apps/mail/pages/email-app.cmp.js';
import emailDetails from '../apps/mail/cmps/email-details.cmp.js';




const myRoutes = [
    
    {
        path: '/email',
        component: mailApp
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/email/:id',
        component: emailDetails
    },

   

 
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;