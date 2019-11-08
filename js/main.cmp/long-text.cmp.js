

export default {
    props: ['txt'],
    template: `
    <section>
      {{text}}
      </section>
    `,

    data() {
        return {
            text: '',

        }
    },
    computed: {

        
    },

    methods: {
        subString() {

            let str = this.txt;
            if (str.length > 50) {

                return this.text = str.substring(0, 50) + " ....";

            }
            return this.text = this.txt;

        },
    },

    created() {
        this.text=this.subString();
    }
}