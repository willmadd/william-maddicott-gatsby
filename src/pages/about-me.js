import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Nav from "../components/Nav"

const about = () => {
  return (
    <PageTransition
    defaultStyle={{
        transition: 'left 2000ms cubic-bezier(0.83, 0, 0.17, 1)',
        left: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { left: '0%' },
        entered: { left: '0%' },
        exiting: { left: '-100%' },
      }}
      transitionTime={2000}
    >
      <div>
        <Nav/>
        <h1>About MEEEEE</h1>
      </div>
    </PageTransition>
  )
}

export default about
