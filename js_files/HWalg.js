function calc() {
    var a = parseFloat(document.getElementById("a").value);
    var x;

    if (a < 10) {
        x = Math.pow(a, 4);
        document.getElementById("x").innerText = x;
    }
    else {
        if (a > 61) {
            x = a;
            document.getElementById("x").innerText = x;
        }
        else {
            x = a - Math.sin(Math.pow(a, 2));
            document.getElementById("x").innerText = x;
        }
    }
    document.getElementById("x").innerHTML = x;
}