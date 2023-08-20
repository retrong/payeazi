import React from 'react';
import PropTypes from "prop-types";
import '../form-input.css'

const FormInput = ({ handleChange, label, ...otherProps}) => (
        <div className="group">
            <input className="form-input" onChange={handleChange} />
            {label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null}
        </div>
);

FormInput.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.func,
};

export default FormInput;