import React from "react"

interface videoIn {
    title: string,
    duration: number,
    uploadDate: Date,
    descripcion: string
}

const Video = (props:videoIn) => {
    const seconds = props.duration % 60
    var minutes = Math.floor(props.duration / 60)
    const hours = Math.floor(minutes / 60)
    while (minutes >= 59) {
        minutes = minutes -  60
    }
    const days = Math.floor(hours / 24)
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
            <span>{'Days='+days+' Time='+hours+':'+minutes+':'+seconds}</span>
            <br></br>
            <span>{props.uploadDate.toDateString()}</span>
            </div>
            <p>{props.descripcion}</p>
        </div>
        
    )
}

export default Video