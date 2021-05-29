import React from 'react';
import classes from './input.module.scss'

const Input = props => {
    const inputId = `${props.type}_input_${Math.random()}`
    const invalid = !props.valid && props.changed
    const cls = [classes.input, ]
    if (invalid){
        cls.push(classes.invalid)
    }
    return(
        <div className={classes.input}>
            <div>
                <label htmlFor={inputId}>{props.label}</label>
            </div>
            <input className={cls.join(' ')}
                id={inputId}
                type={props.type || 'text'}
                required={props.required || true}
                value={props.value || ''}
                onChange={props.onChange}
            />
            {
                invalid ? <div className={classes.message}>{props.message}</div> : null
            }
        </div>
    )
}

export default Input