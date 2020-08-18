function Table(DataArray) {

    let tbody = document.getElementById("tbody");
    let thead = document.getElementById("thead");

    //удаляем предыдущую таблицу
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
    }
    while (thead.hasChildNodes()) {
        thead.removeChild(thead.lastChild);
    }
    //делаем новую
    AddHeader("X", "Y", "R", "Результат", "Время");
    for (let i = DataArray.length - 1; i >= 0; i--) {
        let AnswerArray = [];
        AnswerArray = DataArray[i].answer.split(',');
        AddRow(DataArray[i].x, DataArray[i].y, DataArray[i].r, AnswerArray[0], AnswerArray[1]);
    }

}

function AddRow(x, y, r, res, time) {
    let table = document.getElementById("tbody");
    let row = document.createElement("TR");
    table.appendChild(row);
    let td_x = document.createElement("TD");
    let td_y = document.createElement("TD");
    let td_r = document.createElement("TD");
    let td_res = document.createElement("TD");
    let td_time = document.createElement("TD");
    row.appendChild(td_x);
    row.appendChild(td_y);
    row.appendChild(td_r);
    row.appendChild(td_res);
    row.appendChild(td_time);
    td_x.innerHTML = x;
    td_y.innerHTML = y;
    td_r.innerHTML = r;
    td_res.innerHTML = res;
    td_time.innerHTML = time;
}

function AddHeader(x, y, r, res, time) {
    let thead = document.getElementById("thead");
    let th_x = document.createElement("TH");
    let th_y = document.createElement("TH");
    let th_r = document.createElement("TH");
    let th_res = document.createElement("TH");
    let th_time = document.createElement("TH");
    thead.appendChild(th_x);
    thead.appendChild(th_y);
    thead.appendChild(th_r);
    thead.appendChild(th_res);
    thead.appendChild(th_time);
    th_x.innerHTML = x;
    th_y.innerHTML = y;
    th_r.innerHTML = r;
    th_res.innerHTML = res;
    th_time.innerHTML = time;
}