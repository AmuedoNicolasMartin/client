import React from "react";
import {useState, useEffect } from "react";

interface homeInt{
    message: string,
    numero: number
}

const Home: React.FC<homeInt> = ()=>{
    const [message, setMessage] = useState('Mensaje x defecto');
    const [numero, setNumero] = useState(6);
    useEffect(()=>{
       fetch('http://localhost:8080/rutas/home')
       .then(response => response.json())
       .then(data => {
        console.log(data);
        setMessage(data.message);
        setNumero(data.numero);  
    }) 
    }, []);

    async function handleClick(){
        await fetch("http://localhost:8080/rutas/home")
         .then(response => response.json())
         .then(data =>{
           alert(JSON.stringify(data))
           setMessage(data.message)
           setNumero(data.numero)
       })
       }

    return (
        <div>
            <button onClick={handleClick}>Traer desde el Back</button>
            <p>{message}</p>
            <p>{numero}</p>
        </div>
    )

}

export default Home