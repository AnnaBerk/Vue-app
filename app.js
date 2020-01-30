const bike = (name, model,owner,year,phone,image)=>({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) =>({text, type, date})

const bikes = [
    bike('Cannondale', 'Habit', 'Gabi', 2018, '+7 925 787 27 55','images/cannondaleBad.jpg'),
    bike('Specialized', 'Stumpjumper', 'Igor', 2019, '+7 925 787 299 55','images/StumpiEvo.jpg')
]

new Vue ({
    el: '#app',
    data:{
        bikes:bikes,
        bike:bikes[0],
        logs:[],
        selectedBikeIndex:0,
        phoneVisibility:false,
        search:'',
        modalVisibility:false,
    },
    methods:{
        selectBike(index){
            this.bike = bikes[index]
            this.selectedBikeIndex =index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Succes order:${this.bike.name} - ${this.bike.model} `,'ok')
            )

        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order:${this.bike.name} - ${this.bike.model} `,'cnl')
            )
        }

    },
    computed:{
        phoneBtnChangeText(){
            return this.phoneVisibility ? "Hide phone" : "Show phone"
        },
        filterderBikes(){
            return this.bikes.filter(bike=>{
                return bike.name.indexOf(this.search)> -1 || bike.model.indexOf(this.search)>-1
            })
        }
    },

    filters: {
        date(value){
            return value.toLocaleString()
        }

    }
})