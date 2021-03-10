const sell = document.getElementById("sell");
const px = document.getElementById("px");
const vp = document.getElementById("vp");
const label = document.getElementById("label");
const imVw = document.getElementById("pxvw");
const imVh = document.getElementById("pxvh");


const result = (id, hsl) => {
	if (!isNaN(hsl)) {
		id.disabled = true;
		id.value = hsl;
	} else {
		id.disabled = false;
		id.value = null;
	}
}


px.addEventListener("keyup", function () {
	const px1 = parseFloat(px.value);
	const temp1 = 100 * px1 / window.innerWidth;
	const hsl1 = temp1.toFixed(2);
	result(vp, hsl1);
});
vp.addEventListener("keyup", function () {
	const vw = parseFloat(vp.value);
	const temp2 = window.innerWidth * vw / 100;
	const hsl2 = temp2.toFixed(2);
	result(px, hsl2);
});


sell.addEventListener("change", function () {
	px.value = null;
	vp.value = null;
	px.disabled = false;
	vp.disabled = false;
	if (sell.value == "1") {
		imVh.style.display = "none";
		imVw.style.display = "initial";
		label.innerHTML = "Vw";
		px.addEventListener("keyup", function () {
			const px1 = parseFloat(px.value);
			const temp1 = 100 * px1 / window.innerWidth;
			const hsl1 = temp1.toFixed(2);
			result(vp, hsl1);
		});
		vp.addEventListener("keyup", function () {
			const vw = parseFloat(vp.value);
			const temp2 = window.innerWidth * vw / 100;
			const hsl2 = temp2.toFixed(2);
			result(px, hsl2);
		});
	} else {
		imVw.style.display = "none";
		imVh.style.display = "initial";
		label.innerHTML = "Vh";
		px.addEventListener("keyup", function () {
			const px2 = parseFloat(px.value);
			const temp3 = 100 * px2 / window.innerHeight;
			const hsl3 = temp3.toFixed(2);
			result(vp, hsl3);
		});
		vp.addEventListener("keyup", function () {
			const vh = parseFloat(vp.value);
			const temp4 = window.innerHeight * vh / 100;
			const hsl4 = temp4.toFixed(2);
			result(px, hsl4);
		});
	}
});