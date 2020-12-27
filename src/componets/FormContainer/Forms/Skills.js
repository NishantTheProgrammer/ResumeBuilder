import { useState } from "react";

const Skills = ({classes,  ...props}) => {

    const [newSkill, setNewSkill] = useState('');
    const [skillsData, setSkills] = useState([])

    const addItem = event => {
        if(event.key === 'Enter') {
            newSkill !== '' && setSkills([...skillsData, event.target.value]);
            setNewSkill('');
        }
    }

    const removeItem = index => {
        setSkills(skillsData.filter((_, i) => i !== index))
    }


    return (
        <form className={classes.form} onSubmit={e => { e.preventDefault();}}>
            <div className={classes.formItem}>
                <input 
                    type="text" 
                    value={newSkill}  
                    autoFocus 
                    onKeyPress={addItem}
                    onChange={e =>setNewSkill(e.target.value)}
                />
                <label>Add skills</label>
            </div>
            {
                skillsData.length !== 0 && (
                    <div className={[classes.formItem, classes.skills].join(' ')}>

                        {
                            skillsData.map((item, index) => (
                                <span 
                                    key={index}
                                    onClick={() => removeItem(index)}
                                >{item}</span>
                            ))
                        }
                    </div>
                )
            }

            <button 
                type="button"
                className={classes.submitButton}
                onClick={() => props.onProgress(skillsData)}
            ><i className='fas fa-check'></i></button>
        </form>
    );
}
export default Skills;