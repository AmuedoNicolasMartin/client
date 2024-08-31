import React, { useState,ChangeEvent,FormEvent } from "react";

interface getRelInt{
    edad: Number
}

//Como pedí un response .json(), estoy obligado a crear una interface,
//que cumpla las condiciones de la respuesta.
interface frontDataInt{ 
    nombre: String
}

const GetRel: React.FC<getRelInt> = () =>{
    const [formData, setFormData] = useState<getRelInt>({edad:0});
    const [frontData, setFrontData] = useState<frontDataInt[]>([]); //La respuesta debera ser un arreglo de objeto con esa interface.


    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const parseParams = {
            edad : formData.edad.toString() 
        }
        //Como URLSearchParams admite unicamente objetos "cuyos atributos sean string" creamos parseParams.
        //Otra manera era usar any para evitar que Typescript verifique los tipos asi: new URLSearchParams(formData as any).toString();
        //Pero es una buena practica evitar el uso de "any".
        const queryParams = new URLSearchParams(parseParams).toString(); //"URLSearchParams": Es un constructor para pasar un query param.
        const response = await fetch(`http://localhost:8080/rutas/consultasql?${queryParams}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await response.json(); 
        //Como pedi una respuesta en formato .json(),
        //tuve que crear la interface de arriba para manejar la "dataFront".
        console.log(data);
        setFrontData(data);
    }


    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
       setFormData(
        {
            ...formData,
            [e.target.name] : e.target.value
        }
       )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1><strong>Get Relacional DB</strong></h1>
                <label>Edad:</label>
                <input type="number" name="edad" placeholder="16" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            {frontData.length > 0 && <h3>Resultado de su busqueda = {frontData[0].nombre}</h3>}
            {/* Typescript pide que el h3 no venga "undefined",
             por eso hay que darle una condicion logica para que se ejecute o no. */}
        </div>
    )
}

export default GetRel;