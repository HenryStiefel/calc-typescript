import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void // this means void return type 
{
    const firstStr: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondStr: string = question('Enter second number:\n');

    const validInput: boolean = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);

    if (validInput)
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);

        console.log(result);
    }
    else
    {
        console.log('\nInvalid Input\n');
        main();
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str); // this parses to an integer or NaN
    const isNum: boolean = !isNaN(maybeNum); // isNaN returns true if not a number, false if is number
    
    return isNum;
}

function isOperator(operator: string): boolean
{
    switch (operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function calculate (firstNum: number, operator: Operator, secondNum: number): number
{
    switch (operator)
    {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}

main();