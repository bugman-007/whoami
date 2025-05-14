import { useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let translateX = 0;

      function setTranslateX() {
        const boxes = document.getElementsByClassName("work-box");
        const container = document.querySelector(".work-container");
        if (!boxes.length || !container) return;

        const rectLeft = container.getBoundingClientRect().left;
        const rect = boxes[0].getBoundingClientRect();
        const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
        const padding = parseInt(window.getComputedStyle(boxes[0]).padding || "0") / 2;

        translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        duration: 40,
        delay: 0.2,
      });

    }, sectionRef); // scoped only to this component

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Threejs</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
