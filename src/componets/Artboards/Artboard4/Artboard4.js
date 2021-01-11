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
                    <h1>Personal Info</h1>
                    Persoanl {props.personal.name}
                </div>
                <div className={classes.education}>
                    <img src={`data:image/png;base64, ${props.personal.image}`} width="100%" alt="Red dot" />
                    Educational
                </div>
                <div className={classes.projects} >
                    Projects
                </div>
                <div className={classes.skills} >
                    Skills
                </div>
                <div className={classes.description} >
                    description
                </div>
            </div>
        </>
    );
}
export default Artboard1;