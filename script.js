
var slider = document.getElementById("range1");
var output = document.getElementById("q4");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


var slider2 = document.getElementById("range2");
var output2 = document.getElementById("demo2");

output2.innerHTML = slider.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("range3");
var output3 = document.getElementById("demo3");

output3.innerHTML = slider.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("range4");
var output4 = document.getElementById("demo4");

output4.innerHTML = slider.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

var slider5 = document.getElementById("range5");
var output5 = document.getElementById("demo5");

output5.innerHTML = slider.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
}
