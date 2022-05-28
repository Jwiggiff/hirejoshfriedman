import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

const pastWork = [
  { url: "https://allamyzelev.netlify.app/", image: "assets/allamyzelev.png" },
  { url: "https://floundernews.tk/", image: "assets/floundernews.png" },
  { url: "https://joshfriedman.dev/", image: "assets/joshfriedman.png" },
];

export default function Jumbotron() {
  let jumboRef = useRef(null);
  const q = gsap.utils.selector(jumboRef);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "screen and (min-width: 800px)": () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: jumboRef.current,
              start: "top top",
              end: "+=4000",
              scrub: true,
              pin: true,
            },
          })
          .addLabel("first")
          .to(q("h1:first-child"), { translateY: "-4rem" })
          .to(q("h1:nth-child(2)"), { opacity: 1 }, "<")
          .to(q("h1:nth-child(3)"), { translateY: "4rem", opacity: 1 }, "<")
          .addLabel("second")
          .to(q("h1:first-child"), { skewX: "-20deg" })
          .to(q("h1:nth-child(2)"), { skewX: "-20deg" }, "<")
          .to(q("h1:nth-child(3)"), { skewX: "-20deg" }, "<")
          .addLabel("third")
          .to(q("h1:first-child"), { translateX: "-14ch" })
          .to(q("h1:nth-child(3)"), { translateX: "14ch" }, "<")
          .addLabel("fourth")
          .to(q("h1:first-child"), { translateY: "0", delay: 0.2 })
          .to(q("h1:nth-child(3)"), { translateY: "0" }, "<")
          .addLabel("fifth")
          .to(q("h1:first-child"), { text: "Resume?" })
          .addLabel("sixth")
          .to(q("h1:nth-child(2)"), { text: "Portfolio?" })
          .addLabel("seventh")
          .to(q("h1:nth-child(3)"), { text: "Store?" })
          .addLabel("eighth")
          .to(q("h1:first-child"), { translateX: "0ch", opacity: 0 })
          .to(q("h1:nth-child(2)"), { opacity: 0 }, "<")
          .to(
            q("h1:nth-child(3)"),
            { translateX: "0ch", text: "I Can Help!" },
            "<"
          )
          .addLabel("ninth")
          .to(q("h1:nth-child(2n-1)"), { translateY: "-1em" })
          .to(q(".info"), { opacity: 1 }, "<")
          .addLabel("tenth")
          .to(q(".info li:nth-child(1)"), { opacity: 1 })
          .addLabel("eleventh")
          .to(q(".info li:nth-child(2)"), { opacity: 1 })
          .addLabel("twelfth")
          .to(q(".info li:nth-child(3)"), { opacity: 1 })
          .addLabel("thirteenth")
          .to(q("h1"), { translateY: "-2em" })
          .to(q(".info"), { translateY: "-4rem" }, "<")
          .to(q(".pastWork, .pastWork *"), { opacity: 1 }, "<")
          .to(q(".pastWork li a"), { pointerEvents: "all" }, "<")
          .addLabel("fourteenth");
      },
    });
  });

  return (
    <div className="jumbotron" ref={jumboRef}>
      <h1>Need a Website?</h1>
      <h1>Need a Website?</h1>
      <h1>Need a Website?</h1>
      <ul className="info">
        <li>Personalized Design</li>
        <li>Creative Animations</li>
        <li>Search Engine Optimization</li>
      </ul>
      <div className="pastWork">
        <h2>Some of My Past Work:</h2>
        <ul>
          {pastWork.map(({ url, image }) => (
            <li key={url}>
              <a href={url} target="_blank">
                <img src={image} alt={url} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
