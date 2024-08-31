import React, { useState, ChangeEvent, FormEvent } from 'react';

const PostForm: React.FC = () => {
  const [formData, setFormData] = useState<{ title: string; body: string }>({ title: '', body: '' });
  const [dataFront, setDataFront] = useState<{ title: string; body: string }>({ title: '', body: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/rutas/Poster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      setDataFront(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };//Se uso la sintaxis de propagacion JS (1argumento copia del objeto, 2doargumento [atributo]: valor)

  return (
    <div>
    <h1><strong>Post from</strong></h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="body" placeholder="Body" onChange={handleChange} />
      <br></br>
      <button type="submit">Submit</button>
    </form>
    <h2>{JSON.stringify(dataFront)}</h2>
    </div>

  );
};

export default PostForm;