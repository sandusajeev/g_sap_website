import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    
    gsap.fromTo(
      ".fade-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".image-slide", 
      {
      x: 600, 
      opacity: 0,
    },
    {
      x:0, 
      opacity: 1,
      duration: 3,
      ease: "power3.out",
    } );

    
    gsap.fromTo(
      ".left-div",
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".right-div",
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    
    ScrollTrigger.create({
      trigger: ".scroll-section",
      start: "top 100%",
      end: "top 50%",
      onLeaveBack: () => {
        gsap.to(".left-div", { x: "-100%", opacity: 0, duration: 1 });
        gsap.to(".right-div", { x: "100%", opacity: 0, duration: 1 });
      },
    });

   
    gsap.fromTo(
      ".t_text",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade-out-section",
          start: "top 30%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <nav className="header">
        <h2 className="logo">Ferrari</h2>
        <div className="navigation">
          <a href="#" className="active">Home<span></span></a>
          <a href="#">About<span></span></a>
          <a href="#">Service<span></span></a>
          <a href="#">Contact<span></span></a>
        </div>
      </nav>

      
      <section className="first-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 fade-text">
              <h2>Ferrari Cars</h2>
              <p className="text-justify">Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947.</p>

            </div>
            <div className="col-md-6 pt-5">
              <img height="400px" src="https://pngimg.com/d/ferrari_PNG10653.png" alt="Animation" className="image-slide" />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-section">
      <div className="container flex justify-between items-center">
        <div className="left-div w-1/2 p-5 text-white text-center">
          <h2>Ferrari 296 GTB/GTS</h2>
          <p>The Ferrari 296 GTS, the evolution of Ferrari’s mid-rear-engined two-seater berlinetta spider concept, is powered by the new 120° V6 engine coupled with a plug-in (PHEV) electric motor that debuted on the 296 GTB, which unleashes a massive 830 cv in total. The car thus redefines the whole concept of fun behind the wheel, guaranteeing pure emotions not just when it is being pushed to its limits, but also in day-to-day driving situations.

          </p>
        </div>
        <div className="right-div w-1/2 p-5 text-white text-center">
          <h2>Ferrari SF90 Stradale/Spider</h2>
          <p>As the Prancing Horse’s first production plug-in hybrid spider, the SF90 Spider sets new performance and innovation benchmarks not only for the marque’s range, but for the entire sports car sector. The new convertible has the same extreme supercar specification and record-breaking performance as the SF90 Stradale yet also adds further driving pleasure and versatility to the mix, thanks to the latest iteration of Ferrari’s signature Retractable Hard Top architecture. This makes the SF90 Spider the ideal car for owners that demand the very pinnacle of Ferrari technology, but still want the thrill and versatility of open-top driving.</p>
        </div>
      </div>
    </section>

    
      <section className="fade-out-section">
        <div className="container">
          <h4 className="t_text">Ferrari car price starts at Rs 3.50 Crore for the cheapest model which is Portofino and the price of most expensive model, which is Purosangue SUV starts at Rs 10.50 Crore. Ferrari offers 6 car models in India, including 1 car in SUV category, 1 car in Convertible category, 4 cars in Coupe category.</h4>
        </div>
      </section>

      <section class="footer" id="footer">
        <div class="contact_heading">
            <h1>Follow Us On</h1>
        </div>
        <div class="icon_set">
            <div class="icon">
                <a href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
            </div>
            <div class="icon">
                <a href=""><i class="fa-brands fa-facebook fa-2x"></i></a>
            </div>
            <div class="icon">
                <a href=""><i class="fa-brands fa-x-twitter fa-2x"></i></a>
            </div>
            <div class="icon">
                <a href=""><i class="fa-brands fa-whatsapp fa-2x"></i></a>
            </div>
        </div>
        <div class="contact_heading">
            <p> &#169; 2025 My Website. All rights reserved.</p>
        </div>
    </section>
    </>
  );
}

export default App;
