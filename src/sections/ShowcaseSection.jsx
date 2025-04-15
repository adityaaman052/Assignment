import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const smartListsRef = useRef(null);
  const profileEnrichmentRef = useRef(null);
  const targetingRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [smartListsRef.current, profileEnrichmentRef.current, targetingRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={smartListsRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="SmartLists Dashboard" />
            </div>
            <div className="text-content">
              <h2>
                Find Leads Continuously Without Technical Expertise
              </h2>
              <p className="text-white-50 md:text-xl">
                Set up SmartLists that automatically add prospects whenever triggers are activated in platforms like Stripe, Calendly, or Tally.io.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={profileEnrichmentRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Auto-Enrich Contacts Feature"
                />
              </div>
              <h2>Get Precise And Up-to-date Profiles Automatically</h2>
            </div>

            <div className="project" ref={targetingRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Advanced Segmentation Interface" />
              </div>
              <h2>Send Targeted Messages Only To The Right People</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;