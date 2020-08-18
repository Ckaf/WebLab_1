
function CheckInput() {
    let inputX, inputY, inputR;

    inputX = Number(document.getElementById("inputX").value.replace(/,/, '.'));
    inputY = Number(document.getElementById("inputY").value.replace(/,/, '.'));
    inputR = Number(document.getElementById("inputR").value.replace(/,/, '.'));


    if (CheckNum(inputX)&&CheckNum(inputY)&&CheckNum(inputR)) {
        if (inputX < -5 || inputY < -5 || inputR < 1 || inputX > 5 || inputY > 5 || inputR > 4) {
            alert("Данные введены некоректно")
        } else {
            Send(inputX, inputY, inputR)
        }
    }
}
function CheckNum(input) {
    if (input.toString().replace(/\s/g, '').length === 0 || isNaN(input)) alert("Должны быть введенны числа!")
    else return true;
}
