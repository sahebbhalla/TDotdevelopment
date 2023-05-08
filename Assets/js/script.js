const burger = document.querySelector("nav svg");
burger.addEventListener("click", ()=>{
  if(burger.classList.contains("active")){
    gsap.to('.links',{x: '100%'})
    gsap.to(".line",{stroke: "white"});
    gsap.set("body",{overflow:"auto"});
    gsap.set("body",{overflowX:"hidden"});
  }else{
    gsap.to('.links',{x: '0%'})
    gsap.to(".line",{stroke: "black"});
    gsap.fromTo(".links a",{opacity:0,y:0},{y:20,opacity:1,delay:0.25,stagger:0.25});
    gsap.set("body",{overflow:"hidden"});
  }
    burger.classList.toggle("active");
  
});

const medias= gsap.utils.toArray(".contentmedia");
gsap.set(medias,{opacity:0});
medias.forEach((media) => {
    ScrollTrigger.create({
        trigger:media,
        start:"top center",
        end:"bottom center",
      
        onEnter:()=>{
            gsap.to(media,{opacity:1});
            media.play()
        },
        onEnterBack:()=>media.play(),
        onLeave:()=>media.pause(),
        onLeaveBack:()=>media.pause(),
    })
   

});