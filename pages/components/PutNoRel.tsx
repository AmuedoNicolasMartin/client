import React, { useState,ChangeEvent,FormEvent } from "react";

interface PutNoRelInt {
    _id: String,
    pass: String,
    email: String,
    name: String,
    fecha: String,
    age: Number,
    activo: Boolean
    //children: React.ReactNode
}

const PutNoRel : React.FC<PutNoRelInt> = () =>{
    const [formData, setFormData] = useState<PutNoRelInt>({_id:'',pass:'',email:'',name:'',fecha:'',age:0,activo:false});
    const [dataFront, setDataFront] = useState<PutNoRelInt>({_id:'',pass:'',email:'',name:'',fecha:'',age:0,activo:false});

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/rutas/putNoRel',{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            setDataFront(data);
        }catch(err){
            console.error(err);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    };


    return (
        <div>
            <h1><strong>Put form</strong></h1>
            <form onSubmit={handleSubmit}>
                <label>ID de Usuario:</label>
                <br></br>
                <input type="text" name="_id" onChange={handleChange}/>
                <br></br>
                <label>Password:</label>
                <br></br>
                <input type="text" name="pass" placeholder="*******" onChange={handleChange} />
                <br></br>
                <label>email:</label>
                <br></br>
                <input type="email" name="email" placeholder="juan@gmail.com" onChange={handleChange}/>
                <br></br>
                <label>Name:</label>
                <br></br>
                <input type="text" name="name" placeholder="Juan" onChange={handleChange}/>
                <br></br>
                <label>Fecha Ingreso:</label>
                <br></br>
                <input type="date" name="fecha" onChange={handleChange}/>
                <br></br>
                <label>Age:</label>
                <br></br>
                <input type="number" name="age" onChange={handleChange}/>
                <br></br>
                <label>Activo?:</label>
                <br></br>
                <input type="checkbox" name="activo" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <h2>{JSON.stringify(dataFront)}</h2>
        </div>
    )
}

export default PutNoRel;