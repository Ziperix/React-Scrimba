// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

import React from 'react'
import ReactDOM from 'react-dom'

let myList = <ul>
                <li>Jeden</li>
                <li>Dwa</li>
                <li>Trzy</li>
             </ul>

ReactDOM.render(myList, document.getElementById('root'))
