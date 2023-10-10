function verify() {
    let a = parseFloat(document.f.a.value)

    let x
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
}

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify)
