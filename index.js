function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function (a, b) {
         return a + b
    },
    subtract: function (a, b) {
        return a - b
    }, 
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer (startInt, arrayOfFunctions) {
    let answer = startInt
    for(let i = 0; i < arrayOfFunctions.length; i++) {
        answer = arrayOfFunctions[i](answer)
    }
    return answer
}