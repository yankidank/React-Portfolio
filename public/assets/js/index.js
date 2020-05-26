// Tilt 
VanillaTilt.init(document.querySelectorAll(".projects_wrapper_left"), {
	reverse: true,
	max: 5,
	scale: 1.06,
	speed: 4000,
	perspective: 2000,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	gyroscope:   true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX:  45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY:  45,
})
VanillaTilt.init(document.querySelector("#page-header"), {
	reverse: true,
	max: 10,
	speed: 400,
	startY: -45,
	perspective: 500,
});
VanillaTilt.init(document.querySelector(".footer-contact"), {
	reverse: true,
	max: 8,
	scale3d: (1, 1, 1),
	scale: 1.25,
	speed: 4000,
	easing: "cubic-bezier(.07,.98,.52,.99)",
	gyroscope:   true,
    gyroscopeMinAngleX: -55,
    gyroscopeMaxAngleX:  55,
    gyroscopeMinAngleY: -55,
    gyroscopeMaxAngleY:  55,
});

// The Net
var map = {};
onkeydown = onkeyup = function(e){
	e = e || event;
	map[e.keyCode] = e.type == 'keydown';
	if(map[17] && map[16]){ // Press CTRL+SHIFT
		document.getElementById("thenet").innerHTML = "<a href='https://www.youtube.com/watch?v=pXPXMxsXT28' class='thenet' target='_blank' rel='noopener noreferrer'>π</a>";
	}
}

// IntersectionObserver
const images = document.querySelectorAll('.projects_wrapper_left');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('animate');
		}
	});
});
images.forEach(image => {
	observer.observe(image);
});
