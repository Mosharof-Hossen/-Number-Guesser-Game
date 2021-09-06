let min = 1
let max = 10
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

document.getElementById("playNow").addEventListener("click",()=>{
    let correctAns = parseInt(randomNumber(min,max))
    console.log(correctAns)
    let selectedNumber = ""
    for (let index = 0; index < 3; index++) {
        let guessValue = prompt("Enter a Number within 1-10")
        selectedNumber += " " + guessValue
        if(correctAns == guessValue){
            alert("YOU WIN")
            result(correctAns,selectedNumber,"YOU WIN") 
            break;
        }else if(index == 2){
            alert("Game Over")
            result(correctAns,selectedNumber,"GAME OVER") 
            break
        }
        else if(correctAns>guessValue){
            alert(" Correct answer is greater!")
        }else if(correctAns<guessValue){
            alert(" Correct answer is Smaller!")
        }
        
    }
    
})

function result(correctAns, selectedNumber, gameResult) {
    let output = `
                <h2>${gameResult}</h2>
                <p>Correct Number : ${correctAns} & Your Guesses Number: ${selectedNumber}</p>
    `
    document.getElementById("result").innerHTML = output
    document.getElementById("playNow").innerText = "Restart"
}