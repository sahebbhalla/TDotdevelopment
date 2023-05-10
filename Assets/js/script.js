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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}