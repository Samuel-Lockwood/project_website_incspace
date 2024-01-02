"use client"
import React, { useState } from "react";
import "./Nav.css";

import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className="app__navbar">
      <div className="app__container flex__between">
        <div className="app__navbar_logo">
          <Link href={"/"}>
            <h1 className="gradient__text">incspace</h1>
          </Link>
        </div>
        <div className="app__navbar_btns">
          <button className="app__navbar_btn_talk">
            <p>Let's Talk</p>
            <Image 
            src={"/assets/icons/arrow-right.svg"}
            width={26}
            height={20}
            alt="arrow"
            />
          </button>
          <div className="app__navbar_btn_menu">
            <Image 
            src={"/assets/icons/menu.svg"}
            width={20}
            height={20}
            alt="Menu"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav