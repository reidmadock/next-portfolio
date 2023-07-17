'use client';

import Link from "next/link";
// import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem"

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Projects", href:"/projects" }
];

export default function NavBar() {
    const [navActive, setNavActve] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link href={'/'}>
                    <h1 className="logo">Reid Logo</h1>
                </Link>
                <div 
                    onClick={() => setNavActve(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div>
                        <h1>Projects</h1>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
                    {MENU_LIST.map( (menu, index) => {
                        return (
                        <div
                            onClick={() => {
                                setActiveIndex(index)
                                setNavActve(false)
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIndex === index} {...menu} />
                        </div>)
                    })}
                </div>
            </nav>
        </header>
    )
}