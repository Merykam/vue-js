

const app = Vue.createApp({

    data(){
        return{
            x:0,
            y:0
        }
        
    },

   
    methods:{
        handelevent(e){
            console.log(e,e.type);
            this.x=e.offsetX
            this.y=e.offsetY

        }
     
    }

}
    
)
app.mount('#app')