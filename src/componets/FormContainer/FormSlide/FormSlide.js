import classes from "./FormSlide.module.css";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import Forms from '../Forms';

const FormSlide = props => {
    let type = null;
    if(Object.keys(props.items).length > props.currentFormNumber ) {
        type = Object.keys(props.items)[props.currentFormNumber]
    }
    else return <h1>Here We done</h1>;

    let FormElement = Forms[type.charAt(0).toUpperCase() + type.slice(1)];
    
    return (
        <div className={classes.formSlide}>
            <h1>{type}</h1>
            <ProgressIndicator {...props}/>
            <FormElement {...props}  classes={classes} />
        </div>
    )
}

export default FormSlide;