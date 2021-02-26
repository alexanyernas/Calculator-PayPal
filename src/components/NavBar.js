import React from 'react';

const NavBar = () => {
    return (

        <nav 
            className="navbar navbar-expand-lg navbar-dark mb-4" 
            style= { 
                { 
                    backgroundColor:'#3b7bbf', 
                    fontFamily: 'sans-serif', 
                    display:'flex', 
                    justifyContent: 'space-between' 
                } 
            }
        >
            
            <p className="navbar-brand mt-3">Calculadora PayPal</p>
       
            <div className="navbar-nav">
                
                <a 
                    className="nav-link"
                    href="https://github.com/alexanyernas/" 
                    rel="noreferrer" 
                    target="_BLANK"
                >
                    <i className="bi bi-github mr-1"></i>
                </a>
                
                <a 
                    className="nav-link" 
                    href="https://twitter.com/alexanyernas/" 
                    rel="noreferrer" 
                    target="_BLANK"
                >
                    <i className="bi bi-twitter mr-1"></i>
                </a>
                
                <a 
                    className="nav-link" 
                    href="https://instagram.com/alexanyernas/" 
                    rel="noreferrer" 
                    target="_BLANK"
                >
                    <i className="bi bi-instagram mr-1"></i>
                </a>
            </div>

        </nav>
    )
}

export default NavBar;