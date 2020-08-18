let DataArray=[];
function Send(X, Y, R) {
    let request = new XMLHttpRequest();
    let str = '?x=' + X + '&y=' + Y + '&r=' + R;
    request.open('GET', 'Script.php' + str, false)
    request.onload = function () {
        DataArray.push({x:X,y:Y,r:R,answer:request.responseText})
        Table(DataArray)
    }
    request.send();
}

