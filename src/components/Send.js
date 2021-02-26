import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

const Send = () => {

    const [ { toSend }, handleInputChange ] = useForm({
        toSend: ''
    })

    const [ total, setTotal ] = useState('');
    const [ err, setErr ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCalculator = () => {
        if (!isNaN( toSend )) {
            setTotal( toSend );
            setErr(false);
        } else {
            setErr(true);
            setTotal('');
        }
    }

    return (
        <>
            <h2>Calcular para Enviar</h2>
            <hr />
            <form onSubmit={ handleSubmit }>
                
                <div className="form-group">
                    <label>Si se Envían:</label>
                    <div className="row container">
                        <input 
                            type="text"
                            className={ `col-11 form-control ${ err && 'border-danger alert-danger' }`}
                            name="toSend"
                            value={ toSend }
                            onChange={ handleInputChange }
                        />
                        <p className="col-1 mt-1">USDs</p>
                    </div>
                </div>

                <div className="form-group">
                    <button 
                        className="btn btn-primary col"
                        type="submit"
                        onClick= { handleCalculator }
                    >
                        Calcular
                    </button>
                </div>

                <hr />
                
                <div className="form-group">
                    <label>La Comisión es de:</label>
                    <div className="row container">
                        <input 
                            type="text"
                            className="col-11 form-control"
                            name="toSend"
                            readOnly
                            value= { total }
                        />
                        <p className="col-1 mt-1">USDs</p>
                    </div>
                </div>
                
                <div className="form-group">
                    <label>Se Reciben:</label>
                    <div className="row container">
                        <input 
                            type="text"
                            className="col-11 form-control"
                            readOnly
                        />
                        <p className="col-1 mt-1">USDs</p>
                    </div>
                </div>

            </form>  
        </>
    );
}

export default Send;