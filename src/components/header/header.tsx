import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

function Header(props: HeaderPropsType) {
    return <header className={s.header}>
        <img className={s.imglogo} src='https://images.freeimages.com/images/previews/531/letter-c-1641882.png'/>
        <div className={s.loginBlock}>
            {props.isAuth? props.login : <NavLink to={"/login"}>Login</NavLink> }
        </div>

    </header>
}

export default Header