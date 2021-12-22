let mul = function(){

    let number_1 = document.getElementById('num1').value;
    let number_2 = document.getElementById('num2').value;
    let number_3 = document.getElementById('num3').value;
    let cal = `The output is: ${number_1*number_2*number_3}`;
    let result = document.getElementById('output');
    result.innerText = cal;
}

let btn = document.getElementById('mul_btn');
btn.addEventListener('click', mul);