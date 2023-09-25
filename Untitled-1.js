let attempts = 0;
let maxNum;
let isValid = false;

while (!isValid) {
    maxNum = parseInt(prompt("Enter a maximum number"));
    if (!isNaN(maxNum)) {
        isValid = true;
    } else {
        alert("Not correct");
    }
}

let guessNum = Math.floor(Math.random() * (maxNum + 1));

while (true) {

    let i = prompt("Guess the number");
    i = parseInt(i);
    if (!isNaN(i)) {
        attempts++;
        if (i === guessNum) {
            alert(`Congratulations, you found the answer with ${attempts} attemps`);
            break;
        }
        else if (i > guessNum) {
            alert("Lower");
        } else {
            alert("Higher");
        }
    } else {
        alert("Not correct");
    }
}