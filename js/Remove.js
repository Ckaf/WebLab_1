function RemoveSession(){
for (let i=sessionStorage.length;i>=0;i--){
    sessionStorage.removeItem(i.toString());

    //очищаем таблицу
    let tbody = document.getElementById("tbody");
    let thead = document.getElementById("thead");
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
    }
    while (thead.hasChildNodes()) {
        thead.removeChild(thead.lastChild);
    }
}
}