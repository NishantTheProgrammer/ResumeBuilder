import classes from './Workspace.module.css';

const Workspace = props => {
    return (
        <div className={[classes.workspace, classes.noElement].join(' ')}>
            <h1>Drag and Drop elements or choose a template</h1>
        </div>
    );
}

export default Workspace