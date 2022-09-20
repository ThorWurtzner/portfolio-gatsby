import * as React from "react"
import "./index.scss";
import Introduction from "../components/Introduction/Introduction"
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Mywork from "../components/MyWork/MyWork";
import RoadMap from "../components/RoadMap/RoadMap";

export default function Index() {
  return (
    <div className="App">
      <Introduction />
      <main className="main" id="main">
        {/* <Navigation /> */}
        <Mywork />
        <AboutMe />
        {/* <RoadMap /> */}
        <Footer />
      </main>
    </div>
  )
}
