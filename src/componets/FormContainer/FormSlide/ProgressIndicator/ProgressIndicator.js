

import classes from './ProogressIndicator.module.css';

const ProgressIndicator = props => {
    return (
        <div className={classes.progressIndicator}>
            {
                Object.keys(props.items).map((item, index) => {
                    let specialClass = '';
                    if(index < props.currentFormNumber) {
                        specialClass = classes['done'];
                    }
                    else if( index === props.currentFormNumber) {
                        specialClass = classes['active'];
                    }

                    return (
                        <div className={classes.item} key={index}>
                            <i 
                                className={[props.items[item], specialClass].join(' ')}
                                onClick={() =>props.updateFormNumber(index)}
                                ></i>
                            <p>{item}</p>
                        </div>
                    )
                })
            }
                
        </div>
    );
}
export default ProgressIndicator;