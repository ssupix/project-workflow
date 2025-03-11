// moving xshero buttons

var tl = gsap.timeline ()
.to('.video-btn',{
    x: "random(-20, 20, 5)", 
    y: "random(-20, 10, 3)",
    duration:1,
    ease:"none",
    repeat:-1,
    repeatRefresh:true
})