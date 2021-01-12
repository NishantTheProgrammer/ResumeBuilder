import { useState } from 'react'
import Items from './Items/Items';
import classes from './SideBar.module.css';

const SideBar = props => {
    const [open, setOpen] = useState(false);


    return (
        <div 
            className={[classes.sidebar, !open ? classes.close : ''].join(' ')} >
            <header>
                { open && <h1>Resume Builder</h1>}
                <div 
                    className={classes.hamburger}
                    onClick={() => setOpen(!open)}
                    ><i className="fas fa-bars"></i>
                </div>
            </header>
            <Items 
                hamburgerOpen={open} 
                isInfoFilled={props.isInfoFilled} 
                pickedTemplate={props.pickedTemplate} 
                clickHandler={props.clickHandler}/>
        </div>
    )
}

export default SideBar;