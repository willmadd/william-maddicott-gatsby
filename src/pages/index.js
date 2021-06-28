import React from "react"
import { Link } from "gatsby"
// import HeroSection from '../components/HomePage/Components/HeroSection';
import HeroSection from "../components/HeroSection"
import Nav from "../components/Nav"
import PageTransition from "gatsby-plugin-page-transitions";
import TransitionLink from "gatsby-plugin-transition-link";
const index = () => {
  return (
    // <PageTransition
    //   defaultStyle={{
    //     transition: "left 2000ms cubic-bezier(0.83, 0, 0.17, 1)",
    //     left: "100%",
    //     position: "absolute",
    //     width: "100%",
    //   }}
    //   transitionStyles={{
    //     entering: { left: "0%" },
    //     entered: { left: "0%" },
    //     exiting: { left: "-100%" },
    //   }}
    //   transitionTime={2000}
    // >
      <div>
        <Nav />
        <HeroSection />
      </div>
    // </PageTransition>
  )
}

export default index
