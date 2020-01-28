const bike = (name, model,owner,year,phone,image)=>({name, model, owner, year, phone, image})

const bikes = [
    bike('Cannondale', 'Habit', 'Ann', 2018, '+7 925 787 27 55','images/cannondaleBad'),
    bike('Specialized', 'Stumpjumper', 'Igor', 2019, '+7 925 787 299 55','images/StumpiEvo')
]

new Vue ({
    el: '#app',
    data:{
        bikes:bikes
    }
})