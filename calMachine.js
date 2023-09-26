function calMachine(value) {

    var str = document.frm.result.value;

    if (value == 'x') {
        value = '*';
    }
    if (value == '=') {
        str = eval(str);
    }
    else if (value == 'AC') {
        str = '';
    }
    else {
        str += value;
    }
    document.frm.result.value = str;
}

