import React, { useState, createContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Achievements from "./Components/Achievements/Achievements";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobile from "./Components/Sidebar/NavbarMobile";
import Footer from "./Components/Footer/Footer" ;
 
export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div id={theme}>
          <NavbarMobile changeTheme={ changeTheme } theme={ theme }/>
          <Sidebar changeTheme={ changeTheme } theme={ theme }/>
          <About />
          <WorkExperience />
          <TechStack />
          <Education />
          <Project />
          <Achievements />
          <Contact />
          <Footer />
        </div>
        
        <ScrollToTop
          smooth={true}
          top="20"
          color="white"
          height="20"
          width="20"
          style={{ borderRadius: "90px", backgroundColor: "#38004C" }}
        />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
