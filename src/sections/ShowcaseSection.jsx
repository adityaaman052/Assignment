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
              <video 
                src="/videos/reactin_demo.mp4" 
                autoPlay 
                loop 
                muted
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-content">
              <h2>
                Automate Your LinkedIn Outreach Without Limits
              </h2>
              <p className="text-white-50 md:text-xl">
                Create powerful automation workflows that connect with your ideal prospects using personalized messages. Scale your outreach efforts without sacrificing quality.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={profileEnrichmentRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/demo1.jpeg"
                  alt="LinkedIn Profile Enrichment"
                />
              </div>
              <h2>Access Rich Data Profiles With Complete Contact Info</h2>
            </div>

            <div className="project" ref={targetingRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/demo3.jpeg" alt="Targeted Messaging Interface" />
              </div>
              <h2>Segment Your Audience For Maximum Engagement</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;