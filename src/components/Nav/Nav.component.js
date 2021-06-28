// import React from "react"
import Star from "../Star";
import "./Nav.style.scss";
// const Nav = () => {
//   return (
//     <nav role="navigation">
//       <h2 id="menu__title" className="menu__title">
//         <span>WM</span>
//       </h2>
//       <div id="menuToggle">
//         <label className="menu__label" for="menuchk">
//           CHK
//         </label>
//         <input type="checkbox" name="menuchk" id="menuchk" />
//         <span className="burger__span"></span>
//         <span className="burger__span"></span>
//         <span className="burger__span"></span>
//         <ul id="menu">
//           <li>
//             <a href="#home" className="active">
//               {/* <span className="nav__letter">W</span>M */}
//               <Star />
//             </a>
//           </li>
//           <li>
//             <a href="#about">
//             <Star />
//             </a>
//           </li>
//           <li>
//             <a href="#services">
//             <Star />
//             </a>
//           </li>
//           <li>
//             <a href="#work">
//             <Star />
//             </a>
//           </li>
//           <li>
//             <a href="#skills">
//             <Star />
//             </a>
//           </li>
//           <li>
//             <a href="#contact">
//             <Star />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Nav.component

import React from 'react';
import { Link } from "gatsby";

const Nav= () => {
  return (
    <div>
      <nav role="navigation">
       <h2 id="menu__title" className="menu__title">
         <span>WM</span>
       </h2>
       <div id="menuToggle">
         <label className="menu__label" htmlFor="menuchk">
           CHK
         </label>
         <input type="checkbox" name="menuchk" id="menuchk" />
         <span className="burger__span"></span>
         <span className="burger__span"></span>
         <span className="burger__span"></span>
         <ul id="menu">
           <li>
           <Link to={'/'}>
               {/* <span className="nav__letter">W</span>M */}
               <Star /> WM
             </Link>
           </li>
           <li>
             <Link to={'/about-me'}>
             <Star /> About
             </Link>
           </li>
           <li>
             <a href="#services">
             <Star /> Services
             </a>
           </li>
           <li>
             <a href="#work">
             <Star /> Work
             </a>
           </li>
           <li>
             <a href="#skills">
             <Star /> Skills
             </a>
           </li>
           <li>
             <a href="#contact">
             <Star /> Contact
             </a>
           </li>
         </ul>
       </div>
     </nav>
    </div>
  );
};

export default Nav;