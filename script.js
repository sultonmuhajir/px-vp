// Function Result
function result(id, hsl) {
    if (!isNaN(hsl)) {
        $(id).prop("disabled", "true");
        $(id).val(hsl);
        $(id).css({
            "fontWeight": "bold",
            "background": "none",
            "borderBottom": "1px solid"
        });
    } else {
        $(id).prop("disabled", "");
        $(id).val(null);
        $(id).css({
            "fontWeight": "normal",
            "background": "white",
            "borderBottom": "none"
        });
    }
}


// Px-Vw
$("#px1").keyup(function () {
    const px1 = parseFloat($("#px1").val());
    const temp1 = 100 * px1 / window.innerWidth;
    const hsl1 = temp1.toFixed(2);
    result("#vw", hsl1);
});


// Vw-Px
$("#vw").keyup(function () {
    const vw = parseFloat($("#vw").val());
    const temp2 = window.innerWidth * vw / 100;
    const hsl2 = temp2.toFixed(2);
    result("#px1", hsl2);
});


// Px-Vh
$("#px2").keyup(function () {
    const px2 = parseFloat($("#px2").val());
    const temp3 = 100 * px2 / window.innerHeight;
    const hsl3 = temp3.toFixed(2);
    result("#vh", hsl3);
});


// Vh-Px
$("#vh").keyup(function () {
    const vh = parseFloat($("#vh").val());
    const temp4 = window.innerHeight * vh / 100;
    const hsl4 = temp4.toFixed(2);
    result("#px2", hsl4);
});