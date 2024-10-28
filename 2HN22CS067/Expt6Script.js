let result;
let input1; 
let input2;

function calculate(operation) {
    input1 = parseFloat(document.getElementById("input1").value);
    input2 = parseFloat(document.getElementById("input2").value);
    
    switch (operation) { 
        case 'sum':
            result = input1 + input2;
            break;
        case 'difference':
            result = input1 - input2;
            break;
        case 'product':
            result = input1 * input2;
            break;
        case 'quotient':
            result = input1 / input2;
            break;
        case 'remainder':
            result = input1 % input2;
            break;
        case 'power':
            result = Math.pow(input1, input2);
            break;
        case 'square': 
            result = input1 ** 2; 
            break;
        case 'sqrt':
            result = Math.sqrt(input1); 
            break;
        default:
            result = "Invalid operation";
            break;
    }
    
    document.getElementById("result").innerText = "Shrisdhar Result: " + result;
}
