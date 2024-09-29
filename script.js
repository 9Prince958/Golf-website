
var crsr=document.querySelector("#cursor")
var vrsr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
crsr.style.left = dets.x+"px"
crsr.style.top = dets.y+"px"
})



document.addEventListener("mousemove", function(dets){
    vrsr.style.left = dets.x-120+"px"
    vrsr.style.top = dets.y-120+"px"
    })
    
 
gsap.to("#nav" ,{
    backgroundColor:"black",
   
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -5%",
        end:"top -11%",
        scrub:1
    }


})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scrollar:"body",
        //markers:true,
      scrub:2,
        start:"top -40%",
        end:"top -100%",
    }

})

gsap.from("#about-us", {
   
    y:80,
    opacity:0,
    duration:2,
    stagger:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:3,

    }
    
})


gsap.from("#card-container", {
   
    y:80,
    opacity:0,
    duration:2,
    stagger:0.8,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3,

    }
    
})
gsap.from("#col1", {
    y:-50,
    x:-40,
    opacity:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#col1",
        scrub:2,
        //markers:true,
    }
})

gsap.from("#col2", {
    y:30,
    x:50,
    opacity:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#col1",
        scrub:2,
       // markers:true,
    }
})
gsap.from("#waiting", {
    y:80,
    opacity:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#waiting",
        scrub:2,
        //markers:true,
        start:"bottom 90%",
        end:"bottom 85%",
      
    }
})

