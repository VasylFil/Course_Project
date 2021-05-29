import React from 'react';
import classes from './project.module.scss'

const Project = (props) => {

    return(
        <div className={classes.project}>
            <div className={classes.newProject}>
                <input type="text" placeholder="Назва проекту"/>
                <button>Створити новий проект</button>
            </div>
            {props.state.projects.map( (item, index) => {

                return(
                    <div className={`${classes.myProjects} ${item.tasks[0] === item.tasks[1] ? classes.done: classes.active}`}>
                        <div>{item.name}</div>
                        <div>{item.type}</div>
                        <div>{item.tasks[0]}/{item.tasks[1]}</div>
                        <div>{item.ddl}</div>
                        <div>Змінити</div>
                        <div>Видалити</div>
                    </div>
            )})}
        </div>
    )
}

export default Project