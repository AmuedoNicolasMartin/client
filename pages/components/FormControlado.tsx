import React, {useState} from "react";

interface formControladoInt{
    email: string,
    password: string
}


const FormControlado: React.FC<formControladoInt> = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsj, setErrorMsj] = useState('');
    const [control, setControl] = useState<boolean>(false);
    const validar = () =>{
        if (!email.includes('@')){
          setErrorMsj('email no valido.');
         return setControl(true);
        }else{
            if (password.length < 4){
                setErrorMsj('password no valido.');
               return setControl(true);
            }
        }
        setErrorMsj('');
        return setControl(false)   
        
    }

    const login = () => {
            //validar();
            if (email === 'pedro@gmail.com' && password === 'password'){
                return alert('Login correcto!')
            }
            if (control === false){
               return alert('El usuario no existe o la password es incorrecta.');
               
                
            }
    }


    return (
        <div>
            <form onSubmit={e =>{
                e.preventDefault();
                login();
            }}>
                <input 
                    type="text"
                    name="email"
                    autoComplete="off"
                    placeholder="Juan@gmail.com"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                        validar();
                     }
                    }
                />
                <p>{email}</p>
                <input 
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                        validar();
                     }
                    }
                />
                <br></br>
                <p>{errorMsj}</p>
                <button type="submit" disabled={control?true:false}>Login</button>
            </form>
        </div>
    )
}



export default FormControlado