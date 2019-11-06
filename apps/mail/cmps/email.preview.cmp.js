

    export default {
        props: ['email'],
        template: `
            <li class="flex space-around">
                <h1> {{email.sentFrom}}</h1>
                <h1> {{email.subject}}</h1>
                <p>time</p>
              
            </li>
        `,
        
    
        computed:{
           
        },
    }