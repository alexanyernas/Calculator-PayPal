import React from 'react';
import NavBar from './NavBar';
import Receive from './Receive';
import Send from './Send';
import '../styles/calculator.css';

const CalculatorPaypal = () => {
    return (
        <>
            <NavBar />

            <div className="container">
        
                <div className="row mt-3 ml-3">
        
                    <div className="calculator col-11 bg-light rounded p-3">
                        <Receive />
                    </div>  
        
                </div>

                <div className="row mt-3 ml-3">

                    <div className="calculator col-11 bg-light rounded p-3">
                        <Send />
                    </div>
        
                </div>
            </div>
        
        </>
    )
}

export default CalculatorPaypal;