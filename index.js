import fs from 'fs';               
import chalk from 'chalk';        
import calc from './calculator.js';  


const num1 = 5 ;
const num2 = 10;


const sum = calc.add(num1 , num2);
const mult = calc.multiply(num1 , num2);
const diff = calc.sub(num2, num1)
const div = calc.divide(num2 , num1)


console.log(chalk.green(`Sum: ${num1} + ${num2} = ${sum}`));
console.log(chalk.blue(`Difference: ${num1} - ${num2} = ${diff}`));
console.log(chalk.yellow(`Product: ${num1} * ${num2} = ${mult}}`));
console.log(chalk.red(`Quotient: ${num1} / ${num2} = ${div}`));




const log = `Results: \nSum: ${sum}\nDifference: ${diff}\nProduct: ${mult}\nQuotient: ${div}\n`;
fs.writeFileSync('result.txt', log, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    }
});

console.log(chalk.bold.cyan('Results logged to result.txt'));