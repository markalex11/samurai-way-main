import React from "react";
import s from './header.module.css';

function Header() {
    return <header className={s.header}>
        <img className={s.imglogo} src='https://images.freeimages.com/images/previews/531/letter-c-1641882.png'/>
    </header>
}

export default Header