function locomotive(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotive();

function page1(){

    gsap.to("#page1 #pg1-ani-top", {
        height:"20%",
        duration:1,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          scrub: true,
          start: "top 28%",
        //   end: "top 5%",
          // markers:true
        }
    })

    gsap.to("#page1 #pg1-ani-btm", {
        height:"0%",
        duration:1,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          scrub: true,
          start: "top 28%",
        //   end: "top 90%",
          // markers:true
        }
    })
}
page1();

function lineHover(){
  document.querySelectorAll(".text")
  .forEach(function(text){
    text.addEventListener("mouseenter", function(dets){
      gsap.to(dets.target.children[1], {
        width:"100%",
        ease: Expo.easeInOut,
        duration:.5
      })
    })

    text.addEventListener("mouseleave", function(dets){
      gsap.to(dets.target.children[1], {
        width:"0%",
        left:"100%",
        ease: Expo.easeInOut,
        duration:.5,
        onComplete: function(){
          dets.target.children[1].style.left=0;
        }
      })
    })
  })
}
lineHover();

function textanim() {
  var h2 = document.querySelector("#pg1-at-left h2");
  var cir = document.querySelector("#pg1-at-left .pg1-cir");
  var h1 = document.querySelector("#pg1-at-left h1")

  var clutter = "";
  var temp = 0;

  for (var i = 0; i <= Math.floor(h1.textContent.length/2); i++) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }

  for (var i = Math.floor(h1.textContent.length / 2) - 1; i >= 0; i--) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }

  h1.innerHTML = clutter;

  document.querySelectorAll("h1 span")
    .forEach(function (elem) {
      gsap.to(elem, {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        fontSize:"5vmax",
        delay: elem.dataset.delay * .15,
        onComplete: function(){
          h2.style.opacity=1
          cir.style.opacity=1
          textanim1();
        }

      })
    })
}
textanim();

function textanim1() {
  var h2 = document.querySelector("#pg1-at-left h2")

  var clutter = "";
  var temp = 0;

  for (var i = 0; i <= Math.floor(h2.textContent.length/2); i++) {
    clutter += `<span data-delay="${i}">${h2.textContent.charAt(temp)}</span>`;
    temp++;
  }

  for (var i = Math.floor(h2.textContent.length / 2) - 1; i >= 0; i--) {
    clutter += `<span data-delay="${i}">${h2.textContent.charAt(temp)}</span>`;
    temp++;
  }
  h2.innerHTML = clutter;

  document.querySelectorAll("h2 span")
    .forEach(function (elem) {
      gsap.to(elem, {
        opacity:1,
        y: 0,
        ease: Expo.easeInOut,
        duration:2,
        fontSize:"5vmax",
        delay: elem.dataset.delay * .15
        
      })
    })
}

// textanim1();