import React, { useState,ChangeEvent,FormEvent } from "react";

interface PatchNoRelInt {
    pass: String,
    name: String,
    activo: Boolean
    //children: React.ReactNode
}

const PatchNoRel : React.FC<PatchNoRelInt> = () =>{
    const [formData, setFormData] = useState<PatchNoRelInt>({pass:'',name:'',activo:false});
    const [dataFront, setDataFront] = useState<PatchNoRelInt>({pass:'',name:'',activo:false});

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/rutas/patchNoRel',{
                method: 'PATCH',
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
            <h1><strong>Patch form</strong></h1>
            <form onSubmit={handleSubmit}>
                <label>Password:</label>
                <br></br>
                <input type="text" name="pass" placeholder="*******" onChange={handleChange} />
                <br></br>
                <label>Name:</label>
                <br></br>
                <input type="text" name="name" placeholder="Juan" onChange={handleChange}/>
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

export default PatchNoRel;