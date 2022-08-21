export function generateRandom(min=0, max=100){
      // find diff
      let difference = max - min;

      // generate random number
      let rand = Math.random();

      // multiply with difference
      rand = Math.floor(rand * difference);

      // add with min value
      rand = rand + min;

      return rand;
}
export function generateRandomColorCode(){
    const color = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let colorCode = '#';
    for(let i=0;i<6;i++){
        colorCode = colorCode + color[Math.floor(Math.random() * 10)];
    }
    return colorCode;
}