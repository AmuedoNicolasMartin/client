import React from "react";
import Hokk from './components/Hokk'; //'./api/Hokk' ;
import { GetServerSideProps } from 'next';
import { PokemonData } from "./components/About";
//---------------copiado del layaut.tsx que venia x default---------------------------------------------------
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated from Next App",
};
//-------------------------------------------------------------------------------------

interface IndexProps {
  datos: PokemonData;
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/25/');
  const datos = await response.json();
  console.log(datos);

  return {
      props: {
          datos,
      },
  };
};

const index: React.FC<IndexProps> = ({ datos }) =>{
  return (
  <Hokk datos={datos} />
  )
}

export default index;