import React, { ReactNode } from "react";
import Header from "./Header";

interface layoutInt {
    children : ReactNode
}

const Layout: React.FC<layoutInt> = ({children}) => {


    return (
        <div className="h-[100dvh]">
            <section className="h-[10dvh] py-1 px-5">
                <Header />
            </section>
            <section className="h-[90dvh] lg:flex lg:gap-x-4">
                <main className="bg-green-100 basis-4/4 lg:basis-3/4 p-5 lg:pr-2 overflow-y-auto">
                    {children}
                </main>
                <div className="bg-blue-100 lg:basis-1/4 p-5 lg:pl-2">
                    <h1>Cart</h1>
                </div>
            </section>
        </div>
    )
}

export default Layout;