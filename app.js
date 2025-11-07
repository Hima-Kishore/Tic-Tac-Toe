

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    clicks = 0;
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

let clicks = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "X";
            box.style.color = "#b0413e";
            turnO = false;
        } else {
            box.innerText = "O";
            box.style.color = "lightblue";
            turnO = true;
        }
        clicks++;
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner} !!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPatterns) {
        if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[0]].innerText != "") {
            showWinner(boxes[pattern[0]].innerText);
            clicks--;
        }
        else if(clicks === 9) {
            msg.innerText = `It's a draw!`;
            msgContainer.classList.remove("hide");
        }
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);











