

function saturdayFun(activity="roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork (x = "go to the office"){

  return `This Monday, I will ${x}.`
}



let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}


const Calculator = {

function Calculator.add(x,y){
  return `${x} + ${y}`
}
