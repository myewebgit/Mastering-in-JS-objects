// const numbers = [12,15,18,33,58];
// // for(const number of numbers){
//     // console.log(number)
// }


const bottle = {color:'yellow', price:50, isCleaned:true};
// for(const key of bottles){
    // console.log(bottles)
// }

// const keys = Object.keys(bottle);
// console.log(keys)

for(const key in bottle){
    const value = bottle[key];
    console.log(key,value)
}