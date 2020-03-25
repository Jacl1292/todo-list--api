import React from 'react';
import propTypes from 'prop-types'
const ToDoForm = props => {
    return(
        <div className="input-group mb-2">
            <div className="input-group-prepend">
            <select className="from-control" name="done" onChange={props.handleChange} value ={props.done}>
                <option value="">Done</option>
                <option value="true">Ready</option>
                <option value="false">no Ready</option>
            </select>
            </div>
            <input
                type="text"
                name="label"
                className="form-control"
                placeholder="Inserte la tarea aqui..."
                onKeyDown={props.handleKeyDown}
            />
        </div>
    )
}
ToDoForm.propTypes = {
    handleChange: propTypes.func.isRequired,
    handleKeyDown: propTypes.func.isRequired
}
export default ToDoForm;
