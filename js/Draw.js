function DrawAxis() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let context = canvas.getContext('2d');
        context.beginPath();
        //отрисовываем OY
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2, canvas.height);

        //отрисовываем OX
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvas.width, canvas.height / 2);
        context.stroke();

        //отрисовываем стрелки
        Arrow(context, 0, context.canvas.height / 2, context.canvas.width, context.canvas.height / 2)
        context.fillText('X', context.canvas.width * 0.9, context.canvas.height / 2.1)
        Arrow(context, context.canvas.width / 2, context.canvas.height * 0.9, context.canvas.width / 2, 0)
        context.fillText('Y', context.canvas.width / 2.2, context.canvas.height * 0.1)
        context.stroke()
    } else alert("Ваш браузер устарел")
}

function Arrow(context, startX, startY, finishX, finishY) {
    let headlen = 10; // length of head in pixels
    let dx = finishX - startX;
    let dy = finishY - startY;
    let angle = Math.atan2(dy, dx);
    context.moveTo(startX, startY);
    context.lineTo(finishX, finishY);
    context.lineTo(finishX - headlen * Math.cos(angle - Math.PI / 6), finishY - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(finishX, finishY);
    context.lineTo(finishX - headlen * Math.cos(angle + Math.PI / 6), finishY - headlen * Math.sin(angle + Math.PI / 6));
}

function DrawFigure() {
    let input = Number(document.getElementById("inputR").value.replace(/,/, '.'));

    // alert(input)
    if (input < 1 || input > 4) alert("Данные должны находиться в диапозоне от 1 до 4");
    else {
        let size = 30; //величина одной еденицы на холсте
        let canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            input = input * size;
            let context = canvas.getContext('2d');
            //очищаем канвас от предыдущего рисунка
            context.clearRect(0, 0, canvas.width, canvas.height);


            //рисуем четверть окружности
            context.beginPath();
            context.moveTo(context.canvas.width / 2 - input, context.canvas.height / 2);
            context.arc(context.canvas.width / 2, context.canvas.height / 2, input / 2, Math.PI, 1.5 * Math.PI);

            //рисуем треугольник и прямоугольник
            context.lineTo(context.canvas.width / 2 + input / 2, context.canvas.height / 2);
            context.lineTo(context.canvas.width / 2 + input, context.canvas.height / 2);
            context.lineTo(context.canvas.width / 2 + input, context.canvas.height / 2 + input / 2);
            context.lineTo(context.canvas.width / 2, context.canvas.height / 2 + input / 2);
            context.lineTo(context.canvas.width / 2, context.canvas.height / 2);
            context.lineTo(context.canvas.width / 2 - input / 2, context.canvas.height / 2);
            context.fillStyle = "blue";
            context.fill();
            DrawAxis();
            DrawPoint(context, size)

            context.stroke();
        } else alert("Ваш браузер устарел")
    }
}

function DrawPoint(context, size) {
    //Ставим точки на OY
    for (let i = -4; i * size < context.canvas.width; i++) {
        DrawSerifX(context, context.canvas.width / 2 + i * size, context.canvas.height / 2)
        context.fillText(i, context.canvas.width / 2 + i * size, (context.canvas.height / 2) + 10)
    }
    //Ставим точки на OX
    for (let i = -4; i * size < context.canvas.height; i++) {
        DrawSerifY(context, context.canvas.width / 2 , context.canvas.height / 2+ i * size)
        context.fillText(-i, context.canvas.width / 2 , (context.canvas.height / 2)+ i * size + 10)
    }
}

function DrawSerifX(context, x, y) {
    context.beginPath()
    context.moveTo(x, y + 5)
    context.lineTo(x, y - 5)
    context.fillStyle = "red";
    context.stroke();
}
function DrawSerifY(context, x, y) {
    context.beginPath()
    context.moveTo(x+5, y)
    context.lineTo(x-5, y)
    context.fillStyle = "red";
    context.stroke();
}