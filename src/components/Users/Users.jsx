import React from 'react';
import classes from './users.module.scss';
import {withRouter} from 'react-router-dom';

export const Users = props => {
    return(
        <div className={`container`}>
            <h1>Зареєстровані користувачі:</h1>
            <div className={classes.wrapper}>
                {props.state.users.map((user, id) => {
                    return(
                        <div key={id}
                             className={classes.user}
                             onClick={() => {
                                 props.history.push({
                                     pathname: `/profile/${id}`,
                                 })
                             }}>
                            <div>{user.id}</div>
                            <div>
                                <div>{user.firstName} {user.lastName}</div>
                                <div>
                                    {user.email}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )}

export default withRouter(Users)
