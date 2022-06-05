function ageInDays() {
    var birthYear = prompt("What year where you born..?");
    var age = (2022 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + age + " days old");
    h1.setAttribute("id", "result");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);

}

function reset() {
    document.getElementById("result").remove();

}

function generateRandomImg() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-random-img-gen");
    image.src = "https://picsum.photos/200/300";
    div.appendChild(image);
}

function randToRpsInt() {
    return ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)]
}

function decideWinner(human, bot) {
    if (human == bot) {
        return [0, 0];
    } else if (human == "rock" && bot == "paper") {
        return [0, 1];
    } else if (human == "rock" && bot == "scissor") {
        return [1, 0];
    } else if (human == "paper" && bot == "scissor") {
        return [0, 1];
    } else if (human == "paper" && bot == "rock") {
        return [1, 0];
    } else if (human == "scissor" && bot == "rock") {
        return [0, 1];
    } else if (human == "scissor" && bot == "paper") {
        return [1, 0];
    }
}

function finalMessage(yourScore, computerScore) {
    if (results === 0) {
        return { "message": "Draw", "color": 'blue' };

    } else if (results === 0.5) {
        return { "message": "You Lost", "color": 'red' };
    } else {
        return { "message": "You Won", "color": 'green' };
    }
}

function rpsFrontEnd(yourChoice, botChoice, message) {
    var imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    var humandiv = document.createElement("div");
    var botdiv = document.createElement("div");
    var messagediv = document.createElement("div");

    humandiv.innerHTML = "<img src='" + imagesDatabase[yourChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    botdiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    messagediv.innerHTML = "<h1 style ='color: " + message["color"] + ": font-size:60px;padding:30px;'>" + message["message"] + "</h1>"

    document.getElementById("flex-box-rps-div").appendChild(humandiv);
    document.getElementById("flex-box-rps-div").appendChild(messagediv);
    document.getElementById("flex-box-rps-div").appendChild(botdiv);

}


function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = randToRpsInt();
    results = decideWinner(humanChoice, botChoice); //[0,1]human lost,bot won
    message = finalMessage(results); //("message":"you won!","color":"Green"}

    rpsFrontEnd(yourChoice.id, botChoice, message);
}