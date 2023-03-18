let timer = document.getElementById("timer")
let userInput = document.getElementById("userInput")
let hint = document.getElementById("hint")
let button = document.getElementsByTagName("button")[0]
let count = 30

timer.innerHTML = count
button.addEventListener("click",checkPassword)
let myVar = setInterval(mytimer,1000)

function mytimer(){
    console.log("mytimer!");
    count --
    timer.innerHTML = count
    if(count == 0)
    {
        hint.innerHTML="Game Over!"
        clearInterval(myVar);
    }
}

function checkPassword(){

    hint.innerHTML = ""
    if(parseInt(userInput.value) == 1234)
    {
        alert("you got it!")
        clearInterval
    }
    else if(parseInt(userInput.value) > 1234){
        //debugger
        hint.innerHTML="try again! Guess smaller"
    }

    else if(parseInt(userInput.value) < 1234){
        hint.innerHTML="try again! Guess bigger"
    }
    userInput.value = null
}