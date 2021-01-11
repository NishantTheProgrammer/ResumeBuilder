import { Fragment } from 'react';
import generalClasses from '../Artboard.module.css';

import classes from "./classes.module.css";

const Artboard1 = props => {
    return (
        <>
            <div 
                onClick={props.onClickArtboard} 
                className={[generalClasses.container, classes.container].join(' ')} 
                style={{transform: `scale(${props.zoom / 100})`, ...props.style}}>
                
                <div className={classes.personal} >
                    <h2 className={classes.infoType} >Personal Info</h2>
                    
                    <div style={{display: 'flex'}}>
                        <img src={`data:image/png;base64, ${props.personal.image}`} className={classes.profilePic} alt="Red dot" />
                        <div>
                            <p>Name: {props.personal.name}</p>
                            <p>Phone: {props.personal.phone}</p>
                            <p>Email: {props.personal.email}</p>
                            <p>Gender: {props.personal.gender}</p>
                            <p>D.O.B.: {props.personal.dob}</p>
                        </div>  
                    </div>
                </div>
                <div className={classes.education}>
                    <h2 className={classes.infoType} >Educational</h2>
                    <p>{props.education.degree} - {props.education.university}<span style={{float: 'right'}}>{props.education.startDate} to {props.education.endDate}</span></p>
                    <p></p>
                </div>
                <div className={classes.projects} >
                    <h2 className={classes.infoType} >Projects</h2>
                    { 
                        props.projects.map(project => (
                            <Fragment key={project.title}>
                                <b><p><a href={project.url !== "" ? `https://${project.url}` : ''}>{project.title}</a></p></b>
                                <p style={{fontSize: '1.2rem'}}>{project.description}</p>
                            </Fragment>
                        ))
                    }
                </div>
                <div className={classes.skills} >
                    <h2 className={classes.infoType} >Skills</h2>
                    <ul>
                        { props.skills.map(skill => <li key={skill}><p>{skill}</p></li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Artboard1;