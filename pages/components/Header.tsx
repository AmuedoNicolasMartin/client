import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { menu } from "../../assets/asset";

const Header : React.FC = () => {


    return (
        <header className="flex items-center justify-between">
            <section>
                <Logo/>
            </section>
            <section>
               <nav>
                <ul className="flex items-center gap-x-1 px-2 rounded-full bg-background-foreground">
                {menu.map((menu)=>{
                    return(
                    <li>
                    <Link href={menu.href} className="flex items-center gap-x-1  p-1 text-sm rounded-full">
                        <i className={menu.icon}></i>
                        {menu.label}
                    </Link>
                    </li>)
                })}
                </ul>
               </nav>
            </section>
            <section>
                <h1>USER</h1>
            </section>
        </header>
    )
}

export default Header;