function Send(X, Y, R) {
    let request = new XMLHttpRequest();
    let str = '?x=' + X + '&y=' + Y + '&r=' + R;
    request.open('GET', 'script.php' + str, false)
    request.onload = function () {
        let Data=[];
        Data=request.responseText.split(',');
        sessionStorage.setItem(sessionStorage.length.toString(),(X+','+Y+','+R+','+Data[0]+','+Data[1]+','+Data[2]));
        Table()
    }
    request.send();
}

