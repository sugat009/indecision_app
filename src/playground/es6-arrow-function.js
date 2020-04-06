const square=function(x) {
  return x*x;
};

// const cube=(x)=>{
  // return x*x*x;
// };

const cubeArrow=(x)=>x*x*x;

console.log(square(9));
console.log(cubeArrow(3));

const getFirst=(fullName)=>{
  return fullName.split(' ')[0];
}

console.log(getFirst('Mark Henry'));

const getFirst2=(fullName)=>fullName.split(' ')[0];

console.log(getFirst2('Zinedine Zidane'));
