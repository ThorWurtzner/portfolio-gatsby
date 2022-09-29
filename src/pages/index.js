import * as React from "react"
import "./index.scss";
import Introduction from "../components/Introduction/Introduction"
// import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Mywork from "../components/MyWork/MyWork";
import { Helmet } from "react-helmet";
// import RoadMap from "../components/RoadMap/RoadMap";
import favicon from "../images/favicon.png"

export default function Index() {
  return (
    <div className="App">

      <Helmet>
        <title>Thor Würtzner - Portfolio</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      
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
