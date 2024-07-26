let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");

let turn = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = ()=>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (pos1) => {
    msg.innerText = `Congratulations, Winner is ${pos1}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.style.color = "#499AE6";
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
});

resetBtn?.addEventListener("click",resetGame);