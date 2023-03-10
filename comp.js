console.log('hello');

const app = Vue.createApp({

    data() {
        return{
            show:true,
            url:'https://intranet.youcode.ma/transport/booking',
            // title:'hello',
            // author:'adel',
            // age:10

            books:[
                {title:'hellO',author:'adel',age:40},
                {title:'yes',author:'fati',age:20},
                {title:'fafa',author:'dodo',age:10}

            ]



        }
        

    },
    methods:{
        method(){
            this.age=49;
        },
        hidedata(){
            this.show=!this.show
        },
        // showdata(){
        //     this.show=true
        // }
    }

}
    
)
app.mount('#app')