"use strict"

window.addEventListener('scroll', e=> {
	document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

//menu

let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

//show on scroll

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		} else {
			change.target.classList.remove('element-show')
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}


// document.addEventListener('DOMContentLoaded', () => {
  
//   //===== MICRO-SLIDER begin
// 	const __ms = document.querySelector('.micro-slider');
//   const __msSlider = new MicroSlider(__ms, { indicators: true, indicatorText: '' });
//   const hammer = new Hammer(__ms);
// 	const __msTimer = 2000;
//   let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    
//   //detect mouseenter event
// 	__ms.onmouseenter = function(e) {
//     clearInterval(__msAutoplay); 
//     console.log(e.type + ' mouse detected');
//   }
  
//   //detect mouseleave event
// 	__ms.onmouseleave = function(e) {
//     clearInterval(__msAutoplay); 
//     __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
//     console.log(e.type + ' mouse detected');
//   }
  
//   //detect mouseclick event
// 	__ms.onclick = function(e) {
//     clearInterval(__msAutoplay); 
//     console.log(e.type + ' mouse detected');
//   }
  
//   //detect gesture tap event with hammer js library
//   hammer.on('tap', function(e) {
//     clearInterval(__msAutoplay);
//     console.log(e.type + ' gesture detected');
//   });
  
//   //detect gesture swipe event with hammer js library
//   hammer.on('swipe', function(e) {
//     clearInterval(__msAutoplay); 
//     __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
//     console.log(e.type + ' gesture detected');
//   });

//   let slideLink = document.querySelectorAll('.slider-item');
//   if (slideLink && slideLink !== null && slideLink.length > 0){
//     slideLink.forEach( el => el.addEventListener('click', e => {
//       e.preventDefault();
//       let href = el.dataset.href;
//       let target = el.dataset.target;
//       if (href !== '#') window.open(href, target);
//     }));
//   }
  
  //===== MICRO-SLIDER end
  
  //hamburger-star

// });
