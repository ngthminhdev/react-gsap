import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import React, { Fragment, useEffect } from "react";
import bg_1 from "../../assets/solo/bg_1.jpg";
import bg_2 from "../../assets/solo/bg_2.jpg";
import bg_3 from "../../assets/solo/bg_3.jpg";
import load_1 from "../../assets/solo/load_1.png";
import load_2 from "../../assets/solo/load_2.png";
import load_3 from "../../assets/solo/load_3.png";
import load_4 from "../../assets/solo/load_4.png";
import load_5 from "../../assets/solo/load_5.png";
import load_6 from "../../assets/solo/load_6.png";
import load_7 from "../../assets/solo/load_7.png";
import load_8 from "../../assets/solo/load_8.png";
import load_9 from "../../assets/solo/load_9.png";
import load_10 from "../../assets/solo/load_10.png";
import load_11 from "../../assets/solo/load_11.png";
import bg_3_1 from "../../assets/solo/bg_3_1.png";
import bg_3_2 from "../../assets/solo/bg_3_2.png";
import man from "../../assets/solo/man.png";
import title from "../../assets/solo/title.jpg";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

function Solo() {
  useEffect(() => {
    // const smokes = gasp.untils.selector();
    const tl = gsap.timeline({
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: ".Solo",
        start: "top top",
        end: "2400px bottom",
        pin: true,
        scrub: 1,
      },
    });

    tl.from("#bg_1", { yPercent: 100 }, 0)
      .to("#bg_1", { scaleX: 40, scaleY: 30, ease: "power2. easeIn " })
      .fromTo(
        "#man",
        { filter: "blur(10px)", scale: 0, autoAlpha: 0.5 },
        {
          filter: "blur(0px)",
          scale: 1.4,
          autoAlpha: 1,
          x: 50,
          ease: "power2. easeOut ",
        },
        "<"
      )
      // .to('#title', { opacity: 0}, "<")
      .from(
        "#bg_2",
        { duration: 0.1, filter: "blur(3px)", scale: 1.1, opacity: 0 },
        ">"
      )
      .from("#bg_3_1", { filter: "blur(20px)", opacity: 0.5, xPercent: -100 })
      .from(
        "#bg_3_2",
        { filter: "blur(20px)", opacity: 0.5, xPercent: 100 },
        "<"
      )
      .fromTo(
        "#title",
        { filter: "blur(20px)", scale: 1.5, opacity: 0 },
        { filter: "blur(0px)", scale: 1, opacity: 1 },
        "<"
      )
      .fromTo(
        "#bg_3",
        { filter: "blur(20px)", scale: 1.5, opacity: 0 },
        { filter: "blur(0px)", scale: 1, opacity: 0.5 },
        "<"
      )
      .from("#load_1", {
        filter: "blur(10px)",
        width: 0,
        opacity: 0.5,
        xPercent: 80,
      })
      .from(
        "#load_2",
        { filter: "blur(10px)", width: 0, opacity: 0.5, xPercent: 100 },
        "<"
      )
      .to("#load_1", {
        filter: "blur(10px)",
        width: 0,
        opacity: 0.5,
        xPercent: 80,
      })
      .to(
        "#load_2",
        { filter: "blur(10px)", width: 0, opacity: 0.5, xPercent: 100 },
        "<"
      )
      .from(
        "#load_3",
        { filter: "blur(10px)", width: 0, opacity: 0.5, xPercent: 80 },
        "<"
      )
      .from("#load_4", { filter: "blur(10px)", scaleX: 0, opacity: 0 }, "<")
      .from("#load_5", { filter: "blur(10px)", width: 0, opacity: 0.5 }, "<")
      .to("#load_3", { filter: "blur(10px)", opacity: 0.5, yPercent: 100 })
      .to("#load_4", { filter: "blur(10px)", opacity: 0, yPercent: -100 }, "<")
      .to(
        "#load_5",
        { filter: "blur(10px)", width: 0, opacity: 0, xPercent: 80 },
        "<"
      )
      .from(
        "#load_6",
        { filter: "blur(10px)", width: 0, opacity: 0.5, xPercent: 80 },
        "<"
      )
      .from(
        "#load_7",
        { filter: "blur(10px)", opacity: 0.5, yPercent: -100 },
        "<"
      )
      .from(
        "#load_8",
        { filter: "blur(10px)", opacity: 0.5, yPercent: 100 },
        "<"
      )
      .to("#load_6", {
        filter: "blur(10px)",
        width: 0,
        opacity: 0.5,
        xPercent: 100,
      })
      .to(
        "#load_7",
        { filter: "blur(10px)", opacity: 0.5, yPercent: -100 },
        "<"
      )
      .to("#load_8", { filter: "blur(10px)", opacity: 0.5, yPercent: 100 }, "<")
      .from(
        "#load_9",
        { filter: "blur(10px)", width: 0, opacity: 0.5, xPercent: -80 },
        "<"
      )
      .from(
        "#load_10",
        { filter: "blur(10px)", opacity: 0.5, yPercent: 100 },
        "<"
      )
      .from("#load_11", { opacity: 0.5, yPercent: -100 }, "<");
  }, []);

  return (
    <Fragment>
      <section className="Solo">
        <img src={title} alt="title" />
        <img src={bg_1} alt="bg_1" id="bg_1" />
        <img src={man} alt="man" id="man" />
        <img src={bg_2} alt="bg" id="bg_2" />
        <img src={bg_3_1} alt="bg" id="bg_3_1" />
        <img src={bg_3_2} alt="bg" id="bg_3_2" />
        <img src={title} alt="title" id="title" />
        <img src={bg_3} alt="bg" id="bg_3" />
        <img src={load_1} alt="load_1" id="load_1" />
        <img src={load_2} alt="load_2" id="load_2" />
        <img src={load_3} alt="load_3" id="load_3" />
        <img src={load_4} alt="load_4" id="load_4" />
        <img src={load_5} alt="load_5" id="load_5" />
        <img src={load_6} alt="load_6" id="load_6" />
        <img src={load_7} alt="load_7" id="load_7" />
        <img src={load_8} alt="load_8" id="load_8" />
        <img src={load_9} alt="load_9" id="load_9" />
        <img src={load_10} alt="load_10" id="load_10" />
        <img src={load_11} alt="load_11" id="load_11" />
      </section>
      <section id="next">
        <img src={title} alt="title" />
      </section>
    </Fragment>
  );
}

export default Solo;
