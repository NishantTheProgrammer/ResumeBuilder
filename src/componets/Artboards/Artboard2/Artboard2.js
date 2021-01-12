import { Fragment } from 'react';
import generalClasses from '../Artboard.module.css';

import classes from "./classes.module.css";

const Artboard1 = props => {
    return (
        <div 
            id="section-to-print"
            onClick={props.onClickArtboard} 
            className={[generalClasses.container, classes.container].join(' ')} 
            style={{transform: `scale(${props.zoom / 100})`, ...props.style}}>
                
            <div className={classes.personal} >
                <header>
                    { 
                        props.personal && props.personal.image
                            ? <img src={props.personal?.image} className={classes.profilePic} alt="User" />
                            : <img src={'assets/user.png'} className={classes.profilePic} alt="User" />
                    }
                    <div>
                        <p className={classes.name}>{props.personal?.name}</p>
                        <textarea 
                            placeholder="Type description here..." 
                            ></textarea>
                    </div>
                </header>
                <ul>
                    <li><a href={`mailto:${props.personal?.email}`}><i className="fas fa-envelope"></i> {props.personal?.email}</a></li>
                    <li><a href={`tel:${props.personal?.phone}`}><i className="fas fa-phone-alt"></i> {props.personal?.phone}</a></li>
                </ul>
            </div>
            <div className={classes.skills}>
                <h1>Skills</h1>
                <ul>
                    { props.skills?.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                
            </div>
            <div className={classes.projects} >
                <h1>Projects</h1>
                { 
                    props.projects?.map(project => (
                        <Fragment key={project.title}>
                            <b><p><a href={project.url !== "" ? `https://${project?.url}` : ''}>{project?.title}</a></p></b>
                            <p style={{fontSize: '1.2rem'}}>{project?.description}</p>
                        </Fragment>
                    ))
                }
            </div>
            <div className={classes.education} >
                <h1>Education</h1>
                <p><b>{props.education?.degree}</b></p>
                <p>{props.education?.university}</p>
                {props.education?.startDate} to {props.education?.endDate}
            </div>
        </div>
    );
}
export default Artboard1;