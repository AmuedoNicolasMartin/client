import React, { useState,ChangeEvent,FormEvent } from "react";

interface deleteNoRelInt{
    pass: String,
    name: String
}

const DeleteNoRel: React.FC<deleteNoRelInt> = () =>{
    const [formData, setFormData] = useState<deleteNoRelInt>({pass:'',name:''})
    const [frontData, setFrontData] = useState<deleteNoRelInt>({pass:'',name:''})


    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/rutas/deleteNoRel',{
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'text/html/application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            console.log(data);
            setFrontData(data);
        }catch(err){
            console.log(err);
        }
        
    }


    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        }) 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Password:</label>
                <br></br>
                <input type="password" name="pass" placeholder="*****" onChange={handleChange}/>
                <br></br>
                <label>Name:</label>
                <br></br>
                <input type="text" name="name" placeholder="Juan" onChange={handleChange}/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <h2>{JSON.stringify(frontData)}</h2>
        </div>
    )
}

export default DeleteNoRel;
