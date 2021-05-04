const { forever } = require("async")

async function hello () {
  return "Hello"
}

hello()//?

let goodbye = async function () { return "GoodBye" }

goodbye() //?

let tomorrow = async () => { return "ForeEver" }

tomorrow()//?

tomorrow().then(console.log(value))//?




