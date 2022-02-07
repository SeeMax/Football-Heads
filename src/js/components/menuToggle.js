export let menuToggle = () => {
	let tl = new gsap.timeline({
		paused:true,
		defaults: {
			ease: 'circ.out()',
			duration:0.3,
		}
	});

	tl.to('.main-nav', {duration:0.3, left:'0%'}, 'menuOpen');
	tl.to('nav a', {opacity:1, x:'0%', stagger: {amount:0.1}}, 'menuOpen+=0.1');
	tl.to('.hamTop', {rotation:-315,x:7 ,y:3, width:10, transformOrigin:'50% 50%'}, 'menuOpen');
	tl.to('.hamMid', {x:-4, width:18}, 'menuOpen');
	tl.to('.hamBot', {rotation:315, x:7, y:-3, width:10, transformOrigin:'50% 50%'}, 'menuOpen');

	return tl;
}