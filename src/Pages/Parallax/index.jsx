import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { Fragment, useEffect } from "react";
import bg from "../../assets/Images/bg.jpg";
import clouds_1 from "../../assets/Images/clouds_1.png";
import clouds_2 from "../../assets/Images/clouds_2.png";
import man from "../../assets/Images/man.png";
import mountain_left from "../../assets/Images/mountain_left.png";
import mountain_right from "../../assets/Images/mountain_right.png";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);

function Parallax() {

  useEffect(() => {
    const tl = gsap.timeline({ scrollTrigger: {
        scrub: 1,
    } });

    tl.to('#bg', { scale: 1.5 }, 0)
      .to('#man', { scale: .5 }, 0)
      .to('#mountain_left', { x: -500 }, 0)
      .to('#mountain_right', { x: 500 }, 0)
      .to('#clouds_1', { x: 200 }, 0)
      .to('#clouds_2', { x: -200 }, 0)
      .to('#text', { y: 500 }, 0)


    // gsap.to('#bg', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     scale: 1.5
    // });

    // gsap.to('#man', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     scale: .5
    // });
    // gsap.to('#mountain_left', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     x: -500
    // });
    // gsap.to('#mountain_right', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     x: 500
    // });
    // gsap.to('#clouds_1', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     x: 200
    // });
    // gsap.to('#clouds_2', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     x: -200
    // });
    // gsap.to('#text', {
    //     scrollTrigger: {
    //         scrub: 1,
    //     },
    //     y: 500
    // });

  }, [])

  return (
    <Fragment>
      <section className="parallax">
        <img src={bg} alt="bg" id="bg" />
        <h2 id="text">Mountains</h2>
        <img src={man} alt="man" id="man" />
        <img src={clouds_1} alt="clouds_1" id="clouds_1" />
        <img src={clouds_2} alt="clouds_2" id="clouds_2" />
        <img src={mountain_left} alt="mountain_left" id="mountain_left" />
        <img src={mountain_right} alt="mountain_right" id="mountain_right" />
      </section>
      <div className="section">
        <h2>ScrollTrigger Parallax</h2>
        <p>
            They usually have steep, sloping sides and sharp or rounded ridges, and
            a high point, called a peak or summit. Most geologists classify a
            mountain as a landform that rises at least 1,000 feet (300 meters) or
            more above its surrounding area. A mountain range is a series or chain
            of mountains that are close together.
            
            They usually have steep, sloping
            sides and sharp or rounded ridges, and a high point, called a peak or
            summit. Most geologists classify a mountain as a landform that rises at
            least 1,000 feet (300 meters) or more above its surrounding area. A
            mountain range is a series or chain of mountains that are close
            together.
            <br/>
            They usually have steep, sloping sides and sharp or rounded
            ridges, and a high point, called a peak or summit. Most geologists
            classify a mountain as a landform that rises at least 1,000 feet (300
            meters) or more above its surrounding area. A mountain range is a series
            or chain of mountains that are close together.

            They usually have steep, sloping sides and sharp or rounded ridges, and
            a high point, called a peak or summit. Most geologists classify a
            mountain as a landform that rises at least 1,000 feet (300 meters) or
            more above its surrounding area. A mountain range is a series or chain
            of mountains that are close together.
            <br/>
            They usually have steep, sloping
            sides and sharp or rounded ridges, and a high point, called a peak or
            summit. Most geologists classify a mountain as a landform that rises at
            least 1,000 feet (300 meters) or more above its surrounding area. A
            mountain range is a series or chain of mountains that are close
            together.

            They usually have steep, sloping sides and sharp or rounded
            ridges, and a high point, called a peak or summit. Most geologists
            classify a mountain as a landform that rises at least 1,000 feet (300
            meters) or more above its surrounding area. A mountain range is a series
            or chain of mountains that are close together.
            They usually have steep, sloping sides and sharp or rounded ridges, and
            a high point, called a peak or summit. Most geologists classify a
            mountain as a landform that rises at least 1,000 feet (300 meters) or
            more above its surrounding area. A mountain range is a series or chain
            of mountains that are close together.

            They usually have steep, sloping
            sides and sharp or rounded ridges, and a high point, called a peak or
            summit. Most geologists classify a mountain as a landform that rises at
            least 1,000 feet (300 meters) or more above its surrounding area. A
            mountain range is a series or chain of mountains that are close
            together.
            <br/>
            They usually have steep, sloping sides and sharp or rounded
            ridges, and a high point, called a peak or summit. Most geologists
            classify a mountain as a landform that rises at least 1,000 feet (300
            meters) or more above its surrounding area. A mountain range is a series
            or chain of mountains that are close together.
            They usually have steep, sloping sides and sharp or rounded ridges, and
            a high point, called a peak or summit. Most geologists classify a
            mountain as a landform that rises at least 1,000 feet (300 meters) or
            more above its surrounding area. A mountain range is a series or chain
            of mountains that are close together.
            
            They usually have steep, sloping
            sides and sharp or rounded ridges, and a high point, called a peak or
            summit. Most geologists classify a mountain as a landform that rises at
            least 1,000 feet (300 meters) or more above its surrounding area. A
            mountain range is a series or chain of mountains that are close
            together.
            <br/>
            They usually have steep, sloping sides and sharp or rounded
            ridges, and a high point, called a peak or summit. Most geologists
            classify a mountain as a landform that rises at least 1,000 feet (300
            meters) or more above its surrounding area. A mountain range is a series
            or chain of mountains that are close together.
        </p>
      </div>
    </Fragment>
  );
}

export default Parallax;
