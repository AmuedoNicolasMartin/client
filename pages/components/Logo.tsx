//Logo del header hecho con D3.js
import React, {useEffect} from "react";
import Link from "next/link";
import * as d3 from 'd3';
const Logo : React.FC = () =>{

    useEffect(() =>{
        d3.select('#chart').select('svg').remove();

        var dataSet = [14,16,19];
        var colores = ['#ffd700','#abe833','#4e2e09'];
        //combino la data:
        var combinado = dataSet.map((d,i)=>({ altura:d, color:colores[i] })); //no queda otra mas que combinar la data pues
        //No es posible agregar linea por linea en un mismo svg elemento .data(dataN).enter() y asi...Esto es UNA VEZ SOLA y listo.

        var svg = d3.select('#chart')
        .append('svg')
        .attr('width', 125)
        .attr('height',50) 
        .attr('margin',0)
        .attr('padding',0);

       //con .data() > .enter()
       /* svg.selectAll('rect')
        .data(combinado)
        .enter()
        .append('rect')
        .attr('x',(d,i)=>i*15 + 10) //+10 para ver rotacion
        .attr('y',12 ) // + 50 fijo para ver rotacion
        .attr('width', 25)
        .attr('height', (d,i)=>d.altura*2) //d es todo el objeto de cada iteracion.
        .attr('fill', (d,i)=> d.color) // d es todo el objeto de cada iteracion.
        .attr('rx', 10)//redondea borde
        .attr('ry',10)//redondea borde
        .attr('transform',(d,i) => `rotate(30,${i*30 + 22.5},50)`);
    }, []);*/

    //con .forEach()
    combinado.forEach((d, i) => {
        // Crear el rectángulo principal
        svg.append('rect')
            .attr('x', i * 35 + 10)
            .attr('y', 12)
            .attr('width', 25)
            .attr('height', d.altura * 4)
            .attr('fill', d.color)
            .attr('transform', `rotate(30, ${i * 30 + 22.5}, 50)`);

        // Crear el círculo para la esquina superior izquierda
        svg.append('circle')
            .attr('cx', i * 35 + 20) // Ajustar la posición X
            .attr('cy', 22) // Ajustar la posición Y
            .attr('r', 14) // Radio del círculo
            .attr('fill', d.color)
            .attr('transform', `rotate(30, ${i * 30 + 22.5}, 50)`); // Rotar junto con el rectángulo

             // Crear el círculo para la esquina inferior derecha
             svg.append('circle')
             .attr('cx', i * 34 + 35) // Ajustar la posición X
             .attr('cy', 42) // Ajustar la posición Y
             .attr('r', 23) // Radio del círculo
             .attr('fill', d.color)
             .attr('transform', `rotate(30, ${i * 30 + 22.5}, 50)`); // Rotar junto con el rectángulo

             svg.append('circle')
             .attr('cx', i * 34 + 41) // Ajustar la posición X
             .attr('cy', i * 3 + 20) // Ajustar la posición Y
             .attr('r', 1.5) // Radio del círculo
             .attr('fill', 'black');

        });
    }, []);
    return(
        /*<Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg"
        width="150" height="100" viewBox="0 0 3 2">

        <rect width="1" height="2" x="0" fill="#008d46" />
        <rect width="1" height="2" x="1" fill="#ffffff" />
        <rect width="1" height="2" x="2" fill="#d2232c" />
        </svg>

        </Link>*/
        
        <svg id="chart" style={{ width: "125px", height: "50px"}}></svg>
        
        
    )
}

export default Logo;

/*-------------------Ejemplo D3.js con un archivo .csv crear un grafico de barras----------------------------------------
"use client"
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { DSVRowString } from 'd3';

interface Data {
    Country: string;
    Value: number;
}

const D3Component = () => {
    useEffect(() => {
        d3.select("#chart").select("svg").remove();
        // set the dimensions and margins of the graph
        var margin = { top: 30, right: 30, bottom: 70, left: 60},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Parse the Data
        d3.csv<Data>("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", 
            function(data: DSVRowString<string>): Data | null {
                if (!data) return null;

                return {
                    Country: data.Country,
                    Value: +data.Value
                };
            }).then(function(data: Data[]) {
                // X axis
                var x = d3.scaleBand()
                    .range([ 0, width ])
                    .domain(data.map(function(d:Data) { return d.Country; }))
                    .padding(0.2);
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");

                // Add Y axis
                var y = d3.scaleLinear()
                    .domain([0, 13000])
                    .range([ height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(y));

                // Bars
                svg.selectAll("mybar")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function(d) { return x(d.Country) ?? 0; })
                .attr("y", function(d) { return y(d.Value) ?? 0; })
                .attr("width", x.bandwidth())
                .attr("height", function(d) { return height - (y(d.Value) ?? 0); })
                .attr("fill", "#69b3a2")
            });
    }, []);

    return <div id="chart"></div>;
};

export default D3Component;
----------------------------------------------------------------------------------------------------------------------------------
*/