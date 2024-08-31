import React, { useState,ChangeEvent,FormEvent } from "react";

interface PostNoRelInt {
    pass: String,
    email: String,
    name: String,
    fecha: String,
    age: Number,
    activo: Boolean
    //children: React.ReactNode
}

const PostNoRel : React.FC<PostNoRelInt> = () =>{
    const [formData, setFormData] = useState<PostNoRelInt>({pass:'',email:'',name:'',fecha:'',age:0,activo:false});
    const [dataFront, setDataFront] = useState<PostNoRelInt>({pass:'',email:'',name:'',fecha:'',age:0,activo:false});

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/rutas/postNoRel',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
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
            [e.target.name]: e.target.type === 'checbox' ? e.target.checked : e.target.value
        })
    };


    return (
        <div>
            <h1 className="bg-primary/20">Post form</h1>
            <form onSubmit={handleSubmit}>
                <label>Password:</label>
                <br></br>
                <input type="text" name="pass" placeholder="*******" onChange={handleChange} />
                <br></br>
                <label>Email:</label>
                <br></br>
                <input type="email" name="email" placeholder="juan@gmail.com" onChange={handleChange} />
                <br></br>
                <label>Name:</label>
                <br></br>
                <input type="text" name="name" placeholder="Juan" onChange={handleChange}/>
                <br></br>
                <label>Fecha:</label>
                <input type="date" name="fecha" onChange={handleChange}/>
                <br></br>
                <label>Age:</label>
                <br></br>
                <input type="number" name="age" placeholder="23" onChange={handleChange} />
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

export default PostNoRel;
