// Working with Generators

function* infinite(){
  let index = 0
  while( true){
    yield index
    index++
  }
}

const createID = infinite()

// const makeID = generator()
for ( let i = 0; i < 100; i++){
  console.log(createID.next().value)
}

// Working with in operator... alternative to the hasOwnProperty
const person ={
  name:'Mike Rimmer',
  age:71,
  car:'Nissan 370'
}


if ('car' in person){
  console.log(person.car)
}else{
  console.log("Person has no car")
}

if (person.hasOwnProperty('car')){
  console.log(person.car)
}else{
  console.log("Person has no car")
}

// Working with Template literals
function bold(str, ...vars) {
  // This hof reduced the str and var to once single str Note: str[0] is the starting or seedvalue
  return vars.reduce((finalstr, value, index)=>{
    return `${finalstr} <bold>${value}</bold> ${str[index + 1]}`
  }, str[0])
}

const numArry = [1,2,3,4,5,6]
const wordArry = ['Every', 'good', 'boy', 'deserves', 'fudge', '!']
total = numArry.reduce((total, ele, index)=>{
  return total+=ele
})

const sentance = wordArry.reduce((final, ele, index)=>{
  return final += ` ${ ele }`
})

console.log(sentance)//?

console.log(total)

const name = "Mike"

const hobby= "Program"


console.log(bold` Hi my name is ${name} and I like to ${hobby}`)

// importing Modules dynamically
// Use import() and destructuring to assign the imported module
// if(true) {
  //   import("./src/services/printmodule.js").then(({ default: printModule}) =>{
    //   printModule()
    //   })
    // }
    // importing Modules dynamically
    // Use import() and destructuring to assign the imported module but with async
    // ESLint doesnt like this. But works in normall Quokka module
    // if(true) {
    //   import('./printmodule.js').then(({ default: printModule}) =>{
    //   printModule()
    //   })
    // }
    // console.log("In Main Module")



