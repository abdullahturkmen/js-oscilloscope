
var left = -65;
var up = 250;
var t = 0;
var div = 10;
var volt = 10;
var second = 1;
var frequency = 250;
var divheight = 0;
var divwidth = 0;


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");


$('#voltage').on('input', function () {
	this.nextElementSibling.innerHTML = this.value + " V";
	volt = this.value;
	init(left,up,t,div,volt,second,frequency,divheight,divwidth);
});

$('#frequency').on('input', function () {
	this.nextElementSibling.innerHTML = this.value + " Hz";
	frequency = this.value;
	init(left,up,t,div,volt,second,frequency,divheight,divwidth);
});

$('#second-div').on('input', function () {
	this.nextElementSibling.innerHTML = this.value + " ms";	
	second = this.value;
	init(left,up,t,div,volt,second,frequency,divheight,divwidth);
});

$('#volt-div').on('input', function () {
	this.nextElementSibling.innerHTML = this.value + " V";	
	div = this.value;
	init(left,up,t,div,volt,second,frequency,divheight,divwidth);
});

$('#horizontal-offset').on('input', function () {
	this.nextElementSibling.innerHTML = this.value;
	left = (this.value/1)-115;
	init(left,up,t,div,volt,second,frequency,divheight,divwidth);
});


$('#vertical-offset').on('input', function () {
	this.nextElementSibling.innerHTML = this.value;
	up = (this.value/1)+200;
	init(left,up,t,div,volt,second,frequency,divheight,divwidth);
});



function init(left,up,t,div,volt,second,frequency,divheight,divwidth){

	frequency = (1/frequency) * 1000;
	divwidth = (frequency/second)*10;
	//console.log("frequency" + frequency);

	divheight = (volt / div)*5;
	//console.log("divheight " + divheight);

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,500,500);


	ctx.fillStyle = "#2b2b2b";
	for(var xCord=50;xCord<canvas.width;xCord+=50){
		ctx.fillRect(xCord, 0, 2, canvas.width);
	}

	for(var yCord=50;yCord<canvas.height;yCord+=50){
		ctx.fillRect(0, yCord, canvas.height, 2);
	}

	for(var xCordInline=10;xCordInline<canvas.width;xCordInline+=10){
		ctx.fillRect(xCordInline, 246, 2, 10);
	}

	for(var yCordInline=10;yCordInline<canvas.width;yCordInline+=10){
		ctx.fillRect(246, yCordInline, 10, 2);
	}


	animateLeft(left,up,t,div,volt,second,frequency,divheight,divwidth);
	animateRight(left,up,t,div,volt,second,frequency,divheight,divwidth);
}

function animateLeft(left,up,t,div,volt,second,frequency,divheight,divwidth){

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	left = left + 315;
	t=-0.05;
	for(left;left>-65;left -= divwidth/12.5)
	{
		ctx.fillStyle = "#b2ff0d";
		//ctx.fillRect(left,up,2,2);
		ctx.moveTo(left,up);
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#b2ff0d';
		up = up + (Math.cos(t) * divheight);
		t -= 0.1;
		ctx.lineTo(left-divwidth/12.5,up-0.1);
	}
	ctx.stroke();
}

function animateRight(left,up,t,div,volt,second,frequency,divheight,divwidth){

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	t=t+Math.PI+0.05;
	for(left;left<canvas.width;left += divwidth/12.5)
	{
		ctx.fillStyle = "#b2ff0d";
		//ctx.fillRect(left+315,up,2,2);
		ctx.moveTo(left+315,up);
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#b2ff0d';
		up = up + (Math.cos(t) * divheight);
		t += 0.1;
		ctx.lineTo(left+315+divwidth/12.5,up+0.1);
	}
	ctx.stroke();

}