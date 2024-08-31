import React from "react";

interface videoListInt {
    title: string,
    children: React.ReactNode
}

const VideoList = (props:videoListInt) => { 
//const VideoList: React.FC<videoListIn> = ({title, children}) Para evitar usar el props.Tal, todas las veces.
    return (
        <div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default VideoList