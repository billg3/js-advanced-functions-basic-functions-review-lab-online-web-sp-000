

function saturdayFun(activity="roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork (x = "go to the office"){

  return `This Monday, I will ${x}.`
}



function wrapAdjective (thing = "*"){

  return function(adjective = "special"){

    return `you are ${thing} ${adjective} ${thing}`
  }
  



}
