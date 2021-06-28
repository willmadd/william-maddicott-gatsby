import React from "react"
import "./BlogSection.style.scss"

const BlogSection = () => {
  return (
    <section className="blog ">
      <div className="stamp-black relative">
          {/* <div className="texture"></div> */}
        <div className="stamp-clear kohm area-name texture">
          <h1>WILLIAM</h1>
          <h1>MADDICOTT</h1>
        </div>
        <div className="stamp-clear kohm area-job">
          <h2>WEB DESIGN & DEVELOPMENT</h2>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
