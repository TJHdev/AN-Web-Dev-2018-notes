//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

function winBattle () {
    return Math.random() > 0.5 ? true : false;
} 

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// undefined

//#3 return value when moveCommand("back");
// "you arrived home"

//#4 return value when moveCommand("right");
// "you found a river"

//#5 return value when moveCommand("left");
// undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function taskMaster (diceSide) {
    var task;
    switch(diceSide) {
        case "1":
            task = "Go to the cinema";
            break;
        case "2":
            task = "Have a nap";
            break;
        case "3":
            task = "Go for a run";
            break;
        case "4":
            task = "Play some games";
            break;
        case "5":
            task = "Do some gardening";
            break;
        case "6":
            task = "Sunday drive";
            break;
        default:
            task = "Do nothing";
            break;
    }
    return task;
}


function randomNumberOneToSix() {
    return Math.floor((Math.random()*6) + 1) + "";
}

taskMaster(randomNumberOneToSix());
