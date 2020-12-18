import Education from "../Forms/Education";
import Personal from "../Forms/Personal";
import Projects from "../Forms/Projects";
import Skills from "../Forms/Skills";
import classes from "./FormSlide.module.css";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";


const FormSlide = props => {


    let form = null;
    let type = null;
    if(Object.keys(props.items).length > props.currentFormNumber ) {
        type = Object.keys(props.items)[props.currentFormNumber]
    }
    else return <h1>Here We done</h1>;

    switch(type) {
        case 'personal': form = <Personal {...classes}/>; break;
        case 'education': form = <Education {...classes} />; break;
        case 'projects': form = <Projects {...classes} />; break;
        case 'skills': form = <Skills {...classes} />; break;

        default: form = <h1 style={{color: 'red'}}>Something went wrong</h1>;
    }

    return (
        <div className={classes.formSlide}>
            <h1>{type}</h1>
            <ProgressIndicator {...props}/>
            {form}
        </div>
    )
}

export default FormSlide;