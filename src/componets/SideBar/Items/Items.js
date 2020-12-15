import Item from './Item/Item';
import classes from './Items.module.css';

const Items = props => {
    const itemsData = [
        { name: 'container' },
        { name: 'image' },
        { name: 'text' },
        { name: 'list' },
    ]

    return (
        <div className={classes.items} >
            { itemsData.map(data => <Item {...data} hamburgerOpen={props.hamburgerOpen} />) }
        </div>
    )
}

export default Items;