function randomFromArray(arr){
     let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}

let arr = []

for (i=0; i < arr.length; i++){
   console.log(randomFromArray(arr));
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;