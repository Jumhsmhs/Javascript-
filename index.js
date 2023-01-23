// การแสดงผลลัพธ์ออกมาจากการเรียกแท็ก
/*********************************/
/*let content2 = document.getElementById('content-2');
let textHtml = '<b>มันอยากจะไปเที่ยวเหลือเกิน</b>';
textHtml += '<i>...ต้องรวยก่อนนะ</i>';
content2.innerHTML = textHtml;*/


//part 2 code sale 50 baht
/*********************************/
/*let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = 'เสียใจด้วยนะคะ หมดเวลาแล้วค่ะ' ;
}
    
discountButton.addEventListener('click', showMessage);*/


let numberInput = document.getElementById('number-input');
let runButton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMultiply() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    if (number === 0) {
        output.innerHTML = '0 คูณอะไรก็ได้ 0 อยู่ดี';
        return;
    }

    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + '=' + (number * i);
        outputHtml += '</p>';
    }
    output.innerHTML = outputHtml;

}

runButton.addEventListener('click', printMultiply);