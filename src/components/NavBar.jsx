import { useState, useEffect } from "react";

// Updated navLinks to match the Reactin website navigation
const navLinks = [
  { link: "#pricing", name: "Pricing" },
  { link: "#faq", name: "FAQ" },
  { link: "#affiliates", name: "Affiliates 30%" },
  { link: "#blog", name: "Blog" },
];

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Reactin
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#signup" className="contact-btn group">
          <div className="inner">
            <span>Start Using Reactin</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;