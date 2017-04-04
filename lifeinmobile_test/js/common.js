var images = [
'img/pic1.png', 
'img/pic_mini_1.png',
'img/pic_mini_2.png',
'img/pic_mini_3.png',
'img/pic_mini_4.png'
];
var num = 0;

var current;
function next() {
	current = document.querySelectorAll(".slide_item");
	current.src = images[2];
}

// function prev() {
// 	alert('message');
// }


