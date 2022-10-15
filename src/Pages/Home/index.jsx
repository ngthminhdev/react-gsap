import React, { Fragment, useEffect } from "react";
import "./style.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => { 
    const tl = gsap.timeline({ scrollTrigger: {
      trigger: "#section", 
      // stagger: .1, 
      start: 0,
      end: "+=2000",
      pin: true,
      scrub: 1,
    } });
    

    tl.from(".a", { scale: .5, opacity: 0 } )
      .to(".a", { y: 300, rotateX: 5, scale: 2.5, opacity: 1 } )
      .to(".a", {  rotateX: -5, opacity: 0 }, "<" )
      .from(".c", { scale: .5, opacity: 0 }, "<" )
      .to(".c", { y: 300, rotateX: 5, scale: 2.5, opacity: 1 } )
      .to(".c", {  rotateX: -5, opacity: 0 }, "<" )
      .from(".d", { scale: .5, opacity: 0 }, "<" )
      .to(".d", { y: 300, rotateX: 5, scale: 2.5, opacity: 1 } )
      .to(".d", {  rotateX: -5, opacity: 0 } )




  }, []);

  return (
    <Fragment>
      <div
        id="section"
        className="app"
      >
        <div className=" e">white panel</div>
        <div className="panel d">pink panel</div>
        <div className="panel c">yellow panel</div>
        <div className="panel a">blue panel</div>
  
        {/* <div className="panel-r d">pink panel</div>
        <div className="panel-r b">red panel-r</div> */}
        {/* <div className="panel-r c">yellow panel-r</div> */}
      </div>

      {/* <div className="d">white panel</div> */}
    </Fragment>
  );
}

export default Home;
