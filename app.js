const bike = (name, model,owner,year,phone,image)=>({name, model, owner, year, phone, image})

const bikes = [
    bike('Cannondale', 'Habit', 'Ann', 2018, '+7 925 787 27 55','images/cannondaleBad.jpg'),
    bike('Specialized', 'Stumpjumper', 'Igor', 2019, '+7 925 787 299 55','images/StumpiEvo.jpg')
]

new Vue ({
    el: '#app',
    data:{
        bikes:bikes,
        bike:bikes[0],
        selectedBikeIndex:0,
        phoneVisibility:false,
        search:''
    },
    methods:{
        selectBike: function(index){
            this.bike = bikes[index]
            this.selectedBikeIndex =index
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
    }
})