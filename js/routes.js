
import noteApp from '../apps/note/pages/note-app.cmp.js';
import mailApp from '../apps/mail/pages/email-app.cmp.js';
import emailDetails from '../apps/mail/cmps/email-details.cmp.js';
import composeEmail from '../apps/mail/cmps/email-compose.cmp.js'



const myRoutes = [
    
    {
        path: '/email',
        component: mailApp,
        children: [
            {
                path: 'compose',
                component: composeEmail
            },
            {
                path: '/email/:id',
                component: emailDetails
            },

           

        ]
    },
    {
        path: '/note',
        component: noteApp
    },
   
    
    ,

   

 
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;