gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline();

t1.from(".logo",{
    y:-30,
    duration:1.3,
    opacity:0,
    delay:0.5
})

t1.from("li",{
    y:-30,
    duration:1.3,
    opacity:0,
    stagger:0.2
    
})

t1.from("span",{
    y:30,
    opacity:0,
    duration:1.5,
    scale:3
})

t1.from(".img",{
    x:-100,
    duration:1.4,
    opacity:0,
    scale:30,
    
    
})

t1.from(".img-container",{
    x:0,
    opacity:0,
    duration:1
})

t1.from(".des",{

    y:20,
    opacity:0,
    duration:1.2,
    scale:0
})



gsap.from("#skills .skill-heading",{
    y:20,
    opacity:0,
    duration:1.2,
    scale:1.2,
    scrollTrigger:"#skills"
})

gsap.from("#skills .skill-card",{
    x:-20,
    opacity:0,
    duration:1,
    delay:2,
    scale:2,
    stagger:1,
    scrollTrigger:"#skills"
})



