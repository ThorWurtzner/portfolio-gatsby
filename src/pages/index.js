import * as React from "react"
import "./index.scss";
import Introduction from "../components/Introduction/Introduction"
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Index() {
  return (
    <div className="App">
      <Introduction />
      <main className="main" id="main">
        {/* <Navigation /> */}
        <AboutMe />
        <Footer />
      </main>
    </div>
  )
}
