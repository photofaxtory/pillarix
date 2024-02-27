smoothScroll = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

smoothScroll();

heroPage = () => {
    gsap.from("#hero-main .hero-text p", {
        opacity: 0,
        y: 100,
        duration: 3,
        scrollTrigger: {
          trigger: "#hero-main .hero-text h1",
          scroller: "body",
          start: "top 30%",
          end: "top 45%",
          scrub: 1,
        },
      });
      gsap.from("#hero-main .hero-text div", {
        opacity: 0,
        y: 100,
        duration: 3,
        scrollTrigger: {
          trigger: "#hero-main .hero-text p",
          scroller: "body",
          start: "top 45%",
          end: "top 60%",
          scrub: 1,
        },
      });
}
heroPage ()

specialityPage = () => {
    gsap.from("#speciality-main .speciality-cards .speciality-card", {
        opacity: 0,
        y: 100,
        duration: 5,
        stagger: 1,
        scrollTrigger: {
          trigger: "#speciality-main .speciality-cards",
          scroller: "body",
          
          start: "top 60%",
          end: "top 85%",
          scrub: 2,
        },
      });
}
specialityPage ();

menuPage = () => {
    gsap.from("#menu-main .menu-heading-col .menu-heading", {
        opacity: 0,
        y: 100,
        duration: 5,
        scrollTrigger: {
          trigger: "#menu-main .menu-heading-col",
          scroller: "body",
        //   markers: true,
          start: "top 80%",
          end: "top 100%",
          scrub: 2,
        },
      });
    gsap.from("#menu-main .menu-item-col-group .menu-items ", {
        opacity: 0,
        y: 100,
        duration: 3,
        
        scrollTrigger: {
          trigger: "#menu-main .menu-heading-col .menu-heading",
          scroller: "body",
        //   markers: true,
          start: "top 50%",
          end: "top 100%",
          scrub: 2,
        },
      });
}
menuPage ()

cookingPage = () => {
    gsap.from("#cooking-main .video-col img ", {
        opacity: 0,
        y: 100,
        duration: 3,
        
        scrollTrigger: {
          trigger: "#cooking-main",
          scroller: "body",
        //   markers: true,
          start: "top 50%",
          end: "top 100%",
          scrub: 2,
        },
      });
    gsap.from("#cooking-main .cooking-heading h6 , .cooking-heading p , .cooking-heading span ", {
        opacity: 0,
        y: 100,
        duration: 10,
        stagger: 3,
        scrollTrigger: {
          trigger: "#cooking-main .cooking-heading",
          scroller: "body",
        //   markers: true,
          start: "top 90%",
          end: "top 100%",
          scrub: 2,
        },
      });
    
}
cookingPage ()

ocassionPage = () => {
    gsap.from("#ocassion-main .ocassion-heading-col .ocassion-text ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#ocassion-main",
          scroller: "body",
        //   markers: true,
          start: "top 90%",
          end: "top 100%",
          scrub: 2,
        },
      });
    gsap.from("#ocassion-main .ocassion-card-1", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#ocassion-main .ocassion-heading-col .ocassion-text",
          scroller: "body",
        //   markers: true,
          start: "top 50%",
          end: "top 100%",
          scrub: 2,
        },
      });
    gsap.from("#ocassion-main .ocassion-card-2", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#ocassion-main .ocassion-card-1",
          scroller: "body",
        //   markers: true,
          start: "bottom 50%",
          end: "bottom 100%",
          scrub: 2,
        },
      });
}

ocassionPage ()

mainMenuPage = () => {
    gsap.from("#todays-menu-main .todays-heading-col .todays-text ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#todays-menu-main",
          scroller: "body",
        //   markers: true,
          start: "top 70%",
          end: "top 90%",
          scrub: 2,
        },
      });
    gsap.from("#todays-menu-main .today-menu-1 ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#todays-menu-main .todays-heading-col .todays-text",
          scroller: "body",
        //   markers: true,
          start: "bottom 70%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
    gsap.from("#todays-menu-main .today-menu-2 ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#todays-menu-main .today-menu-1",
          scroller: "body",
        //   markers: true,
          start: "bottom 70%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
    gsap.from("#todays-menu-main .today-menu-3 ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#todays-menu-main .today-menu-2",
          scroller: "body",
        //   markers: true,
          start: "bottom 70%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
    gsap.from("#todays-menu-main .today-menu-4 ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#todays-menu-main .today-menu-3",
          scroller: "body",
        //   markers: true,
          start: "bottom 70%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
    
    
}
mainMenuPage ()

clientPage = () => {
    gsap.from("#client-main .client-heading-col .client-heading-text ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#client-main",
          scroller: "body",
        //   markers: true,
          start: "top 70%",
          end: "top 90%",
          scrub: 2,
        },
      });
    gsap.from("#client-main .client-card-col  ", {
        opacity: 0,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#client-main .client-heading-col .client-heading-text",
          scroller: "body",
        //   markers: true,
          start: "bottom 70%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
}
clientPage ()

footerPage =() => {
    gsap.from("#footer-main .footer-top-col .footer-heading-text   ", {
        opacity: 0,
        y: 100,
        duration: 5,
        
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".footer-top",
          scroller: "body",
          // markers: true,
          start: "top 70%",
          end: "center 90%",
          scrub: 2,
        },
      });
    gsap.from("#footer-main .footer-main-col-1 , .footer-main-col-2 , .footer-main-col-3 , .footer-main-col-4", {
        opacity: 0,
        y: 100,
        duration: 10,
        
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#footer-main",
          scroller: "body",
        //   markers: true,
          start: "top 60%",
          end: "top 90%",
          scrub: 2,
        },
      });
    
    
    
}

footerPage ()