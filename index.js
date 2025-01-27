gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline();

t1.from(".logo",{
    y:-30,
    duration:0.8,
    opacity:0,
    delay:0.5
})

t1.from("li",{
    y:-30,
    duration:0.8,
    opacity:0,
    stagger:0.2
    
})

t1.from("span",{
    y:30,
    opacity:0,
    duration:1,
    scale:3
})

t1.from(".img",{
    x:-100,
    duration:1,
    opacity:0,
    scale:0,
    
    
})

t1.from(".img-container",{
    x:0,
    opacity:0,
    duration:1
})

t1.from(".des",{

    y:20,
    opacity:0,
    duration:1,
    scale:0
})



gsap.from("#skills .skill-heading",{
    y:20,
    opacity:0,
    duration:1,
    scale:1.2,
    scrollTrigger:"#skills"
})

gsap.from("#skills .skill-card",{
    x:-20,
    opacity:0,
    duration:0.8,
    delay:2,
    scale:2,
    stagger:1,
    scrollTrigger:"#skills"
})

gsap.from("#contactMe .contact-mainheading",{
    opacity:0,
    x:-20,
    duration:1.3,
    delay:1,
    scrollTrigger:"#contactMe"
})
gsap.from("#contactMe .circle-container div",{
    opacity:0,
    y:40,
    duration:1.2,
    delay:2.2,
    scrollTrigger:"#contactMe",
    stagger:1
})
gsap.from("#contactMe .contact-des",{
    opacity:0,
    y:-40,
    duration:1.2,
    delay:5.2,
    scrollTrigger:"#contactMe",
    stagger:1
})
gsap.from("#contactMe .gmail",{
    opacity:0,
    x:40,
    duration:1.2,
    delay:6.2,
    scrollTrigger:"#contactMe",
    stagger:1
})
gsap.from("#contactMe .github",{
    opacity:0,
    x:-40,
    duration:1.2,
    delay:6.2,
    scrollTrigger:"#contactMe",
    stagger:1
})
gsap.from("#contactMe i",{
    opacity:0,
    x:-40,
    duration:1.2,
    delay:7.4,
    scrollTrigger:"#contactMe",
    stagger:1
})

