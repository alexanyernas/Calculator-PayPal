import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { calcReceive } from '../helpers/calcReceive';

const Receive = () => {

    const [ { toReceive }, handleInputChange ] = useForm({
        toReceive: ''
    })

    const [ total, setTotal ] = useState('');
    const [ commission, setCommission ] = useState('');
    const [ err, setErr ] = useState( false );
    const [ messageErr, setMessageErr ] = useState('');

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const handleCalculator = () => {
        if ( toReceive.trim().length >=  1 ){
            if (!isNaN( toReceive )) {
                setTotal( calcReceive(toReceive) );
                setCommission( (calcReceive(toReceive) - toReceive).toFixed(2) );
                setErr( false );
            } else {
                setErr( true );
                setMessageErr('Debe ingresar un valor numérico válido');
                setTotal('');
                setCommission('');
            }
        } else {
            setErr( true );
            setMessageErr('*Campo Obligatorio')
        }
    }

    return (
        <>
            <h2>Calcular para Recibir</h2>
            <hr />

            <form onSubmit={ handleSubmit }>
                
                <div className="form-group">
                    <label>Para Recibir:</label>
                    <div className="row container">
                        <input 
                            type="text"
                            className={ `col-11 form-control ${ err && 'border-danger alert-danger' }`}
                            name="toReceive"
                            value={ toReceive }
                            onChange={ handleInputChange }
                        />
                        <p className="col-1 mt-1">USDs</p>
                    </div>
                    {
                            err && <small className="form-text text-muted">{messageErr}</small>
                    }   
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
                    <label>Hay que Enviar:</label>
                    <div className="row container">
                        <input 
                            type="text"
                            className="col-11 form-control"
                            name="toReceive"
                            readOnly
                            value= { total }
                        />
                        <p className="col-1 mt-1">USDs</p>
                    </div>
                </div>
                
                <div className="form-group">
                    <label>La Comisión es de:</label>
                    <div className="row container">
                        <input 
                            type="text"
                            value={commission}
                            className="col-11 form-control"
                            readOnly
                        />
                        <p className="col-1 mt-1">USDs</p>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Receive;