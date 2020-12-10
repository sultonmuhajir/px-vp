// Function Result
function result(id, hsl) {
    if (!isNaN(hsl)) {
        document.getElementById(id).disabled = true;
        document.getElementById(id).value = hsl;
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.borderBottom = "1px solid";
        document.getElementById(id).style.background = "none";
    } else {
        document.getElementById(id).disabled = false;
        document.getElementById(id).value = null;
        document.getElementById(id).style.fontWeight = "normal";
        document.getElementById(id).style.borderBottom = "none";
        document.getElementById(id).style.background = "white";
    }
}


// Px-Vw
document.getElementById("px1").addEventListener("keyup", function () {
    const px1 = parseFloat(document.getElementById("px1").value);
    const temp1 = 100 * px1 / window.innerWidth;
    const hsl1 = temp1.toFixed(2);
    result("vw", hsl1);
});


// Vw-Px
document.getElementById("vw").addEventListener("keyup", function () {
    const vw = parseFloat(document.getElementById("vw").value);
    const temp2 = window.innerWidth * vw / 100;
    const hsl2 = temp2.toFixed(2);
    result("px1", hsl2);
});


// Px-Vh
document.getElementById("px2").addEventListener("keyup", function () {
    const px2 = parseFloat(document.getElementById("px2").value);
    const temp3 = 100 * px2 / window.innerHeight;
    const hsl3 = temp3.toFixed(2);
    result("vh", hsl3);
});


// Vh-Px
document.getElementById("vh").addEventListener("keyup", function () {
    const vh = parseFloat(document.getElementById("vh").value);
    const temp4 = window.innerHeight * vh / 100;
    const hsl4 = temp4.toFixed(2);
    result("px2", hsl4);
});