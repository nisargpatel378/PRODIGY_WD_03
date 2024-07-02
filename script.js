// script.js
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).innerText = currentPlayer;
        if (checkWin()) {
            showModal(`${currentPlayer} wins!`);
        } else if (board.every(cell => cell !== "")) {
            showModal("It's a tie!");
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    currentPlayer = "X";
}

function startGame() {
    resetGame();
    closeModal();
}

function showModal(message) {
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
