
import noteApp from '../apps/note/pages/note-app.cmp.js';
import mailApp from '../apps/mail/pages/email-app.cmp.js';
import emailFullDetails from '../apps/mail/cmps/email-full-deatils.cmp.js';
import composeEmail from '../apps/mail/cmps/email-compose.cmp.js'
import emailList from '../apps/mail/cmps/email-list.cmp.js'




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
                path: 'list',
                component: emailList
            },
            {
                path: 'details/:id',
                component: emailFullDetails
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