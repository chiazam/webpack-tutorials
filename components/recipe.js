import React from 'react'
export const Recipe = function (props) {

    return (<section id={props.name.toLowerCase().replace(/ /g, "-")}>

        <h1>{props.name}</h1>

        <ul className="ingredients">
            {props.ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.name}</li>
            )}
        </ul>

        <section className="instructions">

            <h2>Cooking Instructions</h2>

            {props.steps.map((step, i) =>
                <p key={i}>{step}</p>
            )}
            
        </section>

    </section>
    );

};