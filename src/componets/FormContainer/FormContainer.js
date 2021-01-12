import { Component } from "react";

import classes from './FormContainer.module.css';
import FormSlide from "./FormSlide/FormSlide";


class FormComponent extends Component {
    
    formClasses = {
        personal: 'fas fa-user-shield',
        education: 'fas fa-university',
        projects: 'fas fa-tasks',
        skills: 'fas fa-laptop-code'
    }

    state = {
        currentFormNumber: 0
    }

    progressHandler = data => {
        const dataType = Object.keys(this.formClasses)[this.state.currentFormNumber]
        const state = {...this.state};
        state[dataType] = data;
        this.setState(state);
        this.setState(prev => ({currentFormNumber: prev.currentFormNumber + 1}));
    };


    componentDidUpdate() {
        let percent = 100 / (Object.keys(this.formClasses).length - 1) * this.state.currentFormNumber;
        document.documentElement.style.setProperty('--progress-line', `linear-gradient(to right, #0b651a ${percent}%, white ${percent}%)`);
    }

    updateFormNumberHandler = newFormNumber => { this.setState({currentFormNumber: newFormNumber}) }

    render() {

        let isCompleted = Object.keys(this.formClasses).length <= this.state.currentFormNumber;
        if(isCompleted) {
            const state = {...this.state};
            delete state.currentFormNumber;
            this.props.completed(state);
        } 
        return (
            <div className={[classes.form, isCompleted && classes.formCompleted].join(' ')}>
                {
                    isCompleted
                    ?   <p>We're Done</p>
                    :   <FormSlide 
                            items={this.formClasses}
                            currentFormNumber={this.state.currentFormNumber}
                            onProgress={this.progressHandler}
                            updateFormNumber={this.updateFormNumberHandler}
                        />
                }
            </div>
        )
    }
}

export default FormComponent;