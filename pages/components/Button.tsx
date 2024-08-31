import React from 'react';
import About, { PokemonData } from './About';

interface ButtonProps {
    datos: PokemonData;
}


const Button: React.FC<ButtonProps> = ({ datos }) => {
  return (
    <div>
        <About datos={datos} />
    </div>
  );
  
};

export default Button;