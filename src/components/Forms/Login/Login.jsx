import React from 'react';
import Input from "../UI/Input/Input";
import {validation} from "../../../functions/validation";
import {withRouter} from "react-router-dom";
import forms from "../forms.module.scss";

function Login(props){
    const submitHandler = event => {
        event.preventDefault()
        const validForm = props.state.form.login.every( field => field.valid)
        if (!validForm){
            return false
        }
        const email = props.state.form.login[0].value
        const pass = props.state.form.login[1].value
        const correctCredentials = props.state.users.find( user => user.email === email && user.pass === pass)
        if (correctCredentials){
            props.state.login()
            alert('Logged in')
            props.state.clear_fields('login')
            props.history.push({
                pathname: `/users`,
            })
        }else {
            alert('Email or password is incorrect')
        }
    }

    const changeHandler = (index, value) => {
        const item = props.state.form.login[index]
        item.value = value
        item.changed = !!value;
        item.valid = validation(item.value, item.validation)
        props.state.set_login({
            index,
            data: item
        })
    }
    return(
    <div className={forms.form}>
        <div className={forms.header}>
            <div>Авторизація</div>
        </div>
        <form onSubmit={(event => submitHandler(event))}>
            {props.state.form.login.map( (item, index) => {
                return (
                    <Input
                        key={index}
                        label={item.label}
                        type={item.type}
                        value={item.value}
                        message={item.message}
                        valid={item.valid}
                        changed={item.changed}
                        onChange={
                            event => changeHandler(index, event.target.value)
                        }
                    />
                )
            })}
            <button className={forms.greenBtn}>Авторизація</button>
        </form>
    </div>
    )
}

export default withRouter(Login)