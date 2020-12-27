import { Component } from 'react';
import FormContainer from '../FormContainer/FormContainer';
import classes from './Workspace.module.css';

class Workspace extends Component {

    state = {
        isInfoFilled: false

    }


    render() {
        return (
            <div className={[classes.workspace, classes.noElement].join(' ')}>
                { this.state.isInfoFilled 
                    ?    <h1>Drag and Drop elements or choose a template</h1>
                    :   <FormContainer completed={userInfo => setTimeout(() => {
                            this.setState({userInfo, isInfoFilled: true})
                        }, 5000)} />        // after animation done
                }
            </div>
        );
    }
}

export default Workspace