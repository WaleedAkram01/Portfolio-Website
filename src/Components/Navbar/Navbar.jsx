import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "/src/assets/logo.svg";
import underLine from "/src/assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Open from "/src/assets/menu_open.svg";
import Close from "/src/assets/menu_close.svg";
function Navbar() {
  // Now if we want that when we click on specific menu  we must scroll down to that section.
  let [menu, setMenu] = useState("Home");

  // For nav open and close icon.
  const menuRef = useRef();
  // Iss sy right sy 0px sy sidebar dekhna shuru ho gi.
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  // Iss sy sirii hamari sideBar hide ho jai gi
  const CloseMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="nav">
      <img className="logo" src={logo} />
      {/* This is for sidebar Open  */}
      <img
        src={Open}
        style={{ cursor: "pointer" }}
        onClick={openMenu}
        className="nav-mob-open"
        alt=""
      />
      {/* ******* */}
      {/* Now we have move all our menu tag in p tag.*/}
      {/* For these p tags we will use underline Effect. */}
      {/* So to show underline we will import underline */}
      {/* Now we want that when we click on each menu then we should scroll to that section. For that we have to give id to each section*/}
      {/* And also Install Library React Anchor Link Smooth Scroll: npm i react-anchor-link-smooth-scroll */}

      {/* Purpose of Using Offset */}
      {/* Imagine This:
You click a link to scroll to a section called "Services" on your page.
But you have a menu bar at the top of your screen that always stays there (a fixed header).
Without the offset, the "Services" section might be hidden behind this menu bar when you scroll to it. */}
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={Close}
          onClick={CloseMenu}
          style={{ cursor: "pointer" }}
          className="nav-mob-close"
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link " href="#Home">
            <p onClick={() => setMenu("Home")}>Home</p>
          </AnchorLink>
          {menu === "Home" ? <img src={underLine} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link " offset={50} href="#About Me">
            <p onClick={() => setMenu("About Me")}>About Me</p>
          </AnchorLink>
          {menu === "About Me" ? <img src={underLine} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link " offset={50} href="#Services">
            <p onClick={() => setMenu("Services")}>Services</p>
          </AnchorLink>
          {menu === "Services" ? <img src={underLine} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link " offset={50} href="#Portfolio">
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? <img src={underLine} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link " offset={50} href="#Contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <img src={underLine} alt="" /> : <></>}
        </li>
      </ul>
      <button>
        <AnchorLink className="anchor-link " offset={50} href="#Contact">
          Contact With me
        </AnchorLink>
      </button>
    </div>
  );
}

export default Navbar;
