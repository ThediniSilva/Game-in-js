var noOfSquares = 6; // Number of squares
var arr = []; // Palette of random colors
var picked; // The picked target color
var squares = document.getElementsByClassName("square"); // All square elements
var targetColor = document.getElementById("targetColor"); // Target color display
var message = document.getElementById("message"); // Feedback message
var head = document.querySelector("h1"); // Heading
var reset = document.getElementById("NewColor"); // Reset button

// Initialize the game
init();

function init() {
    setupSquares();
    resetGame();
}

// Add event listeners to squares
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            // Compare clicked color with the picked color
            if (picked === this.style.backgroundColor) {
                message.textContent = "Correct!";
                message.style.color = "green";
                changeColors(picked); // Change all squares and header to the correct color
                reset.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again";
                message.style.color = "red";
                this.style.backgroundColor = "#232323"; // Hide wrong color
            }
        });
    }
}

// Reset the game to start a new round
reset.addEventListener("click", resetGame);

function resetGame() {
    // Generate a new palette of random colors
    arr = generateRandomColors(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked; // Update target color display
    message.textContent = ""; // Clear message
    head.style.backgroundColor = "steelblue"; // Reset header color
    reset.textContent = "New Colors"; // Reset button text

    // Update squares with new colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }
}

// Generate an array of random colors
function generateRandomColors(limit) {
    var colors = [];
    for (var i = 0; i < limit; i++) {
        colors.push(rgbGenerator());
    }
    return colors;
}

// Generate a random RGB color
function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Pick a random index from the color array
function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

// Change all squares and header to the same color
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}
