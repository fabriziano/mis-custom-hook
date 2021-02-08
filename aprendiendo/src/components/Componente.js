import React, { Component } from 'react';

class Componente extends Component {

    render() {
        let receta = {
            nombre: 'Pizza',
            ingrediente: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        };

        return(
            <div className="componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingrediente.map((ingredient, i) => {
                            console.log(ingredient);
                            return (
                                <li key={i}>
                                    {ingredient}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}

export default Componente;