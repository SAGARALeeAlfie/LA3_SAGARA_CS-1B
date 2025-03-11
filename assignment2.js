
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));


if (isNaN(maxLimit) || maxLimit < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    console.log("Result:\n");

    
    for (let i = 0; i <= maxLimit; i++) {
        for (let j = 0; j <= maxLimit; j++) {
            let addedValue = i + j;
            console.log(`[${i}] [${j}] Added value is ${addedValue}`);
        }
    }
}
