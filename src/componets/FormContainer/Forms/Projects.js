import { useState } from "react";

const Projects = ({classes,  ...props}) => {

    const [projectData, setProjectData] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const addProject = () => {
        const items = [...projectData];
        items.push({
            title,
            description,
            url
        });

        setTitle('');
        setDescription('');
        setUrl('');
        setProjectData(items);
    }
    
    const removeProject = index => {
        setProjectData(projectData.filter((_, i) => i !== index))
    }
    return (
        <form className={classes.form} onSubmit={e => {e.preventDefault();}}>
            <div className={classes.formItem}>
                <input 
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required></input>
                <label><i className="fas fa-at"></i><span>Title</span></label>
            </div>
            <div className={classes.formItem}>
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required></textarea>
                <label><i className="far fa-file-alt"></i><span>Description</span></label>
            </div>
            <div className={classes.formItem}>
                <input type="text" 
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                required></input>
                <label><i className="fas fa-link"></i><span>Project URL</span></label>
            </div>
            {
                projectData.length !== 0 && (
                    <div className={[classes.formItem, classes.skills].join(' ')}>

                        {
                            projectData.map((item, index) => (
                                <span 
                                    key={index}
                                    onClick={() => removeProject(index)}
                                >{item.title}</span>
                            ))
                        }
                    </div>
                )
            }
            <div>
                <button type="submit" style={{
                    marginRight: '2em',
                    backgroundColor: 'orange'
                    }}
                    onClick={addProject}
                    ><i className='fas fa-plus'></i></button>
                <button type="submit" onClick={() => props.onProgress(projectData)}><i className='fas fa-check'></i></button>
            </div>
        </form>
    )
}

export default Projects;