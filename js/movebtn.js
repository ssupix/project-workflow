var tl = gsap.timeline ()
.to('.video-btn',{
    x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: "random(-20, 10, 3)",
    duration:1,
    ease:"none",
    repeat:-1,
    repeatRefresh:true // gets a new random x and y value on each repeat
})