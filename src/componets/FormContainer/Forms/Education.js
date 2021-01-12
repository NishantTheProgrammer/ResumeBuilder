import { useState } from "react";

const Education = ({classes,  ...props}) => {
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    
    return (
        <form className={classes.form} onSubmit={props.onProgress}>
            
            <div className={classes.formItem}>
                <input 
                    type="text" 
                    required
                    value={university}
                    onChange={e => setUniversity(e.target.value)}
                />
                <label><i className="fas fa-university"></i><span>School/University</span></label>
            </div>
            <div className={classes.formItem}>
                <input 
                    type="text" 
                    required
                    value={degree}
                    onChange={e => setDegree(e.target.value)}
                />
                <label><i className="fas fa-user-graduate"></i><span>Class/Degree</span></label>
            </div>
            <div className={classes.formItem}>
                <input 
                    type="date" 
                    required
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                />
                <label><i className="fas fa-calendar-alt"></i><span>Start</span></label>
            </div>
            <div className={classes.formItem}>
                <input 
                    type="date" 
                    required
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                />
                <label><i className="fas fa-calendar-alt"></i><span>End</span></label>
            </div>
            <button type="submit" onClick={() => props.onProgress({
                university,
                degree,
                startDate,
                endDate
            })}><i className='fas fa-check'></i></button>
        </form>
    )
}

export default Education;