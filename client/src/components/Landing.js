import React from 'react';
import {connect} from 'react-redux'
import {setAlert} from "../actions/alert";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const Landing = () => {

    return (
        <div>
            <div className='main'>
                <h1>TOUKEN IA</h1>
                <p id = "p2">Transcribir videos</p><br/>
                <Link to="/tran" className='rounded-button'>Iniciar transcripción</Link>
                
            </div>
        </div>
    );
};

Landing.propTypes={
    setAlert: PropTypes.func.isRequired,
}

export default connect(null,{setAlert})(Landing);
