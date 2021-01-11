import Artboards from '../Artboards';
import classes from './TemplatePicker.module.css';

const TemplatePicker = props => {

    const ArtboardList = [];
    Object.keys(Artboards).forEach(key => {
        let Artboard = Artboards[key]
        ArtboardList.push(
            <div key={key} style={{transform: `scale(.3)`, height: 850 * props.size / 100, width: 600 * props.size / 100}}>
                <Artboard zoom={100} {...props} onClickArtboard={() => props.onSetArtboard(key)}/>
            </div>
        )
    })
    return (
        <div className={classes.templatePicker}>
            <h1>Pick a template</h1>
            <div className={classes.list} >
                { ArtboardList }
            </div>
        </div>
    );
}
export default TemplatePicker;