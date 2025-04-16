import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

// New automation categories to cycle through
const categories = [
  { text: "Post Interaction", imgPath: "/images/ideas.svg" },
  { text: "Lead Magnet Downloads", imgPath: "/images/concepts.svg" },
  { text: "Webinar Attendees", imgPath: "/images/designs.svg" },
  { text: "Demo Bookings", imgPath: "/images/concepts.svg" },
  { text: "Website Visitors", imgPath: "/images/code.svg" },
  { text: "Newsletter Subscribers", imgPath: "/images/ideas.svg" }
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Intent-Based
                <span className="slide">
                  <span className="wrapper">
                    {categories.map((category, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={category.imgPath}
                          alt={category.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{category.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>LinkedIn Automations</h1>
              <h1>that Drive Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Convert your LinkedIn profile into a powerful lead generation machine with our intelligent automation tools.
            </p>

            <Button
              text="Start Using Reactin"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;