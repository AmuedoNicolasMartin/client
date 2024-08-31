import { useEffect } from 'react';
import Head from 'next/head';

export interface PokemonData {
    sprites: {
        back_default: string;
        front_default: string;
        // Agregar más propiedades si es necesario
    };
    // Agregar más propiedades si es necesario
}

interface AboutProps {
    datos: PokemonData;
}

function About({datos}:AboutProps){

    useEffect(()=>{
        alert('Es el Effect inicial!')
    }, [])
    
    return(
        <div>
        <Head>
            <meta name='description' content='first nextjs'/>
            <title>About</title>
        </Head>
        <h1>About</h1>
        {`ACA ESTAN LOS DATOS ${datos}`}
        <p>This is about.</p>
        <code>{JSON.stringify(datos.sprites.back_default)}</code>
        <br></br>
        <img src={datos.sprites.front_default} alt='Img Error'/>
    
        <button  onClick={()=>alert('Me hiciste click!')}>
            Click
        </button>
        </div>
    )
}


export default About;