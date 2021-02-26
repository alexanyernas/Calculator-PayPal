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
        
                <div className="row mt-5 ml-3">
        
                    <div className="calculator col-5 bg-light rounded p-3">
                        <Receive />
                    </div>  
        
                    <div className="calculator col-5 offset-1 bg-light rounded p-3">
                        <Send />
                    </div>
        
                </div>
            </div>
        
        </>
    )
}

export default CalculatorPaypal;