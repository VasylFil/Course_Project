import {Route, Redirect} from "react-router-dom";
import React from "react";

const PrivateRoute = props => (props.guard ?
        <Route path={props.path}>
            {props.children}
        </Route>
        :
        <Redirect to={props.redirect || '/'}/>
)

export default PrivateRoute

