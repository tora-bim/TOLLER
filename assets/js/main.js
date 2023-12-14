const typewriter = (param) => {
	let el = document.querySelector(param.el);
	let speed = param.speed;
	let string = param.string.split("");
	string.forEach((char, index) => {
		setTimeout(() => {
			el.textContent += char;
		}, speed * index);
	});
};
typewriter({
	el: "#TOLLER", //要素
	string: "TOLLER Inc.", //文字列
	speed: 150, //速度
});
typewriter({
	el: "#subtitle",
	string: "Design the World.",
	speed: 130,
});
