import React from "react";
import classes from "./profile.module.scss";
import {withRouter} from "react-router-dom";

const Profile = props => {
    const user = props.state.users[props.match.params.id]
    return(
    <div className={classes.container}>
        <div className={classes.profile}>
            <div className={classes.pic}/>
            <div className={classes.data}>
                <div className={classes.group}>
                    <div>Імя</div>
                    <input type="text" value={user.firstName}/>
                </div>
                <div className={classes.group}>
                    <div>Прізвище</div>
                    <input type="text" value={user.lastName}/>
                </div>
                <div className={classes.group}>
                    <div>Пошта</div>
                    <input type="text" value={user.email}/>
                </div>
                <div className={classes.group}>
                    <div>Роль</div>
                    <input type="text" value={`Designer`}/>
                </div>
                <div className={classes.group}>
                    <div>Пароль</div>
                    <input type="text" value={user.pass}/>
                </div>
            </div>
        </div>
        <button  className={classes.greenBtn}>Зберегти зміни</button>


    </div>
)}

export default withRouter(Profile)