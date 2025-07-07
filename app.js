let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_game ");
let newGame = document.querySelector("#newGame");
let msg_Container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset_Game = () => {
    turn = true;
    enable_boxes();
    msg_Container.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }

        box.disabled = true; 

        checkWinner();
    })
})

const disable_boxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enable_boxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""; 
    }
}

function handleWin() {
    // Redirect to another HTML page
    window.location.href = "puppy.html";
}

// const showWinner = (Winner) => {
//     msg.innerText = `Congratulations!!! Winner is ${Winner}`;
//     msg_Container.classList.remove("hide");
//     disable_boxes();
// }

const checkWinner = () => {
    for (let pattern of winPattern){
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                //showWinner(pos1Val);
                handleWin();
            }
        }
    }
}

newGame.addEventListener("click",reset_Game);
resetbtn.addEventListener("click",reset_Game);


