const weather1 = [31,29,43,58,52]
const weather2 = [49,51,63]

const weather = [...weather1, ...weather2]
weather.forEach((elem, index) =>{
    console.log(`${elem}% humidity in ${index+1} days`)
})