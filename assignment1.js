let score = parseInt(prompt("Enter your score:"));

let grade = score >= 97 ? "1.00" :
            score >= 94 ? "1.25" :
            score >= 91 ? "1.50" :
            score >= 88 ? "1.75" :
            score >= 85 ? "2.00" :
            score >= 82 ? "2.25" :
            score >= 79 ? "2.50" :
            score >= 76 ? "2.75" :
            score === 75 ? "3.00" :
            score >= 72 ? "4.00" :
            "5.00";

let remarks = score >= 90 ? "HIGH PASS, Candidate for Cum Laude" :
              score >= 80 ? "AVERAGE PASS" :
              score >= 75 ? "LOW PASS" :
              "FAILED, Needs Improvement";

let description = score >= 97 ? "Excellent" :
                  score >= 94 ? "Excellent" :
                  score >= 91 ? "Above Average" :
                  score >= 88 ? "Above Average" :
                  score >= 85 ? "Average" :
                  score >= 82 ? "Average" :
                  score >= 79 ? "Below Average" :
                  score >= 76 ? "Below Average" :
                  score === 75 ? "Below Average" :
                  score >= 72 ? "Poor" :
                  "Poor";

console.log(`Result:`);
console.log(`Your equivalent Grade is "${grade}" ${description}`);
console.log(`Final Remarks: ${remarks}`);
