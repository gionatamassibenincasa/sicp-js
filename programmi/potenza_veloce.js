let moltiplicazioni = 0;
let dimezzamenti = 0;
let decrementi = 0;

function moltiplica(a, b) {
	moltiplicazioni += 1;
	return a * b;
}

function quadrato(a) {
	return moltiplica(a, a);
}

function pari(a) {
	return a % 2 === 0;
}

function potenza_veloce(b, e, str) {
	str += "\npotenza (" + b + ", " + e + ")";
	if (e === 0) {
		str += " = 1";
		console.log(str);
		return 1;
	}
	if (pari(e)) {
		dimezzamenti += 1;
		str += "\n = quadrato (potenza (" + b + ", " + e / 2 + "))";
		return quadrato(potenza_veloce(b, e / 2, str));
	} else {
		decrementi += 1;
		str += "\n = " + b + " * potenza (" + b + ", " + (e - 1) + ")";
		return moltiplica(b, potenza_veloce(b, e - 1, str));
	}
}

function binario(n) {
	let ret = "";
	if (n === 0)
		return "0";
	while (n) {
		ret = (n % 2) + ret;
		n = (n - (n % 2)) / 2;
	}
	return ret;
}

function uni(s) {
	let n = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "1") {
			n += 1;
		}
	}
	return n;
}

let ee = [0, 1, 2, 3, 4, 15, 16, 1024, 1000];
ee.forEach(e => {
	moltiplicazioni = dimezzamenti = decrementi = 0;
	str = "";
	console.log("\nvvvvvvvvvvvvvvvvvvv");
	console.log("Calcolo p (2, " + e + ")\n");
	potenza_veloce(2, e, str);
	let b = binario(e);
	console.log("\ne:", b);
	console.log("Uni:", uni(b));
	console.log("Cifre binarie:", b.length);
	console.log("Numero di moltiplicazioni:", moltiplicazioni);
	console.log("Numero di quadrati (dimezzamenti):", dimezzamenti);
	console.log("Numero di moltiplicazioni per la base (decrementi):", decrementi, "\n\n");
	console.log("^^^^^^^^^^^^^^^^^^^\n");
});
