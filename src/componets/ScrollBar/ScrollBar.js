import classes from './ScrollBar.module.css';

const ScrollBar = props => {
    return (
        <div className={classes.scrollBar}>
            <input 
                type="range" 
                min="50" 
                max="250"
                value={props.zoom}
                onChange={props.onZoomChange}
            />
        </div>
    );
}
export default ScrollBar;