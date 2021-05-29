import React from 'react';
import classes from "../Team/team.module.scss";

const Team = (props) => {

    return(
        <div className={classes.team}>
            <div className={classes.newTeam}>
                <input type="text" placeholder="Назва команди"/>
                <button>Створити нову команду</button>
            </div>
            <div className={classes.title}>
                <div>Номер</div>
                <div>Назва</div>
                <div>Учасники</div>
                <div>Змінити</div>
                <div>Видалити</div>
            </div>
            {props.state.teams.map( (item, index) => {

                return(
                    <div className={classes.myTeams}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.members}</div>
                        <div>Змінити</div>
                        <div>Видалити</div>
                    </div>
                )})}
        </div>
    )
}

export default Team
