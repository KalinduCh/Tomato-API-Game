import { FunctionComponent, useEffect } from "react";
import ButtonsButton from "../components/ButtonsButton";
import FrameComponent from "../components/FrameComponent";
import "./CSS/Signup.css";

const Signup: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="signup" data-animate-on-scroll>
      <main className="inner-frame">
        <img className="outer-frame-icon" alt="" src="/root-frame@2x.png" />
        <section className="outer-frame" />
      </main>
      <div className="first-button1">
        <ButtonsButton avatarBadgeWidth="517px" avatarBadgeAlignSelf="unset" />
        <div className="input-field-wrapper">
          <FrameComponent />
        </div>
      </div>
    </div>
  );
};

export default Signup;
