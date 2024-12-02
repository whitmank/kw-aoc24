import * as fs from 'fs';
// Read file
const input = fs.readFileSync('input.txt', 'utf8');
// Parse each line of the file into an
// array of objects => locations[] = {num1, num2}
const locations = input.split('\n')
    .filter(line => line.trim() !== '') // Filter out empty lines
    .map(line => {
        const [num1, num2] = line
            .trim()
            .split(/\s+/)
            .map(Number);
        // console.log('Parsed numbers:', { num1, num2 });
        return { num1, num2 };
})

// sort the lists from least to greatest
const sortedNum1 = locations.map(loc => loc.num1).sort((a,b) => a - b);
const sortedNum2 = locations.map(loc => loc.num2).sort((a,b) => a - b);
console.log("sortedNum1:", sortedNum1, sortedNum2 );

// Distance
let distanceSum = 0;

for (let i = 0; i < sortedNum1.length; i++) {
    distanceSum += Math.abs(sortedNum1[i] - sortedNum2[i])
}

// Similarity Score
// sortedNum1[i] * freq(sortedNum1[i] in sortedNum2)
let similarityScore = 0;
for (let i = 0; i < sortedNum1.length; i++) {
    let freqNum1 = 0;
    for (let j = 0; j < sortedNum2.length; j++) {
        if (sortedNum1[i] == sortedNum2[j]) {
            freqNum1 ++;
        }
    }
    similarityScore += sortedNum1[i] * freqNum1;
}

console.log("Distance" , distanceSum);
console.log("Similarity Score:", similarityScore);