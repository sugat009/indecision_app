const add = (x,y)=>{
  // console.log(arguments);
  return x+y;
};

// in es6 functions this can only be used if its parent is an es5 function

const user={
  name:'Sugat Bajracharya',
  cities:['Patan','Ktm','Pkh'],
  printPlaceesLived() {              //new method to define methods inside objects
    return this.cities.map((city)=> this.name+'has lived in '+city);
  }
};

console.log(user.printPlaceesLived());

const multiplier={
  numArray:[1,2,3,4,5],
  multiplyBy:3,
  multiply(){
    return this.numArray.map((num)=>this.multiplyBy*num);
  }
};

console.log(multiplier.multiply());
