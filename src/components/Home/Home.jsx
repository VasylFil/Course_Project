import React from 'react';
import classes from './home.module.scss';
import {Link} from 'react-router-dom';


function Home(){
    const saveEmail = event => {
        localStorage.setItem('email', event.target.value)
    }
    return(
    <div className={classes.map}>
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.desc}>
                    <h2><i>DECENTRALIZED</i></h2>
                    <h1>INTERNATIONAL TRADING PLATFORM</h1>
                </div>
                <div>
                    <input type="email" placeholder="Enter your Email here" required onChange={event => saveEmail(event)}/>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className={classes.features}>
            <div className={`container ${classes.container}`}>
                <div>
                    <div className={classes.upper}>5200 BTC</div>
                    <div>24H Volume</div>
                </div>
                <div>
                    <div className={classes.upper}>1 000</div>
                    <div>Pairs</div>
                </div>
                <div>
                    <div className={classes.upper}>700 000</div>
                    <div>Active Traders</div>
                </div>
            </div>
        </div>
    </div>
)}

export default Home