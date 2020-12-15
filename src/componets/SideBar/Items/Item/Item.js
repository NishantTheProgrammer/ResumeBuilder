
import classes from './Item.module.css';

const Item = props => {
    return (
        <div className={
            [classes.item, !props.hamburgerOpen ? classes.close : '']
            .join(' ')} >
            {props.hamburgerOpen ? <p>{props.name}</p> : null}
            <img src={`assets/${props.name}.svg`}/>
        </div>
    )
}

export default Item;