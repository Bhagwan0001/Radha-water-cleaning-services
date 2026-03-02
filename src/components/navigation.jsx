import React, { useEffect, useState } from "react";

export const Navigation = () => {
  const [active, setActive] = useState("features");
  const sectionIds = [
    "features",
    "about",
    "services",
    "portfolio",
    "testimonials",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollPosition < 100) {
        setActive("features");
        return;
      }

      if (scrollPosition + windowHeight >= docHeight - 50) {
        setActive("contact");
        return;
      }

      let currentSection = "";

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top - 150 && scrollPosition < bottom - 150) {
          currentSection = id;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top" style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>
            <span className="highlight2" >Radha</span> Water Tank Cleaning and Services
          </a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            {sectionIds.map((id) => (
              <li key={id} className={active === id ? "active" : ""}>
                <a href={`#${id}`}>
                  {id === "portfolio"
                    ? "Gallery"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};