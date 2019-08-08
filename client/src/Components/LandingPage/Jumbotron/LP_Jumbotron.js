import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './LP_Jumbotron.css'

import '../../../App.css'

var LP_Jumbotron = props => {
    return (
        <div>
            <Jumbotron>
                <div id="text">
                    <h1>Work Order Wizard</h1>
                    <p>Doing the Magic for You</p>
                </div>
                {props.modal}
            </Jumbotron>
        </div>
    )
}

export default LP_Jumbotron
