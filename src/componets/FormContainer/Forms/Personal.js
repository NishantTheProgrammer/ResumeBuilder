import { useState } from "react";

const Personal = ({classes,  ...props}) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('male');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);    


    return (
        <form className={classes.form} onSubmit={e => e.preventDefault()}>
            <div style={{display: 'flex', maxWidth: '50em', overflow: 'hidden'}}>
                <div 
                    className={classes.formItem} 
                    style={{
                        flexBasis: '10rem', 
                        marginRight: '2rem', 
                        backgroundSize: 'cover',
                        backgroundImage: `url(${image})`}}>
                    <input 
                        type="file" 
                        accept="image/x-png,image/gif,image/jpeg"
                        required
                        style={{opacity: 0}}
                        onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
                    />
                    <label><i className="fas fa-image"></i><span></span></label>
                </div>
                <div className={classes.formItem} style={{flexGrow: 1}}>
                    <input 
                        type="text" 
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label><i className="fas fa-user"></i><span>Name</span></label>
                </div>

            </div>
            <div className={classes.formItem}>
                <input 
                    type="date" 
                    required
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
                <label><i className="fas fa-calendar-alt"></i><span>DOB</span></label>
            </div>
            <div className={classes.formItem} style={{justifyContent: 'flex-end', padding: '.4em'}}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: '1.2em'
                }}>
                    Male <input 
                        type="radio" 
                        name='gender' 
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                    Female <input 
                        type="radio" 
                        name='gender'
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    />
                </div>
                <label><i className="fas fa-venus-mars"></i><span>Gender</span></label>
            </div>
            
            <div className={classes.formItem}>
                <input 
                    type="text" 
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label><i className="fas fa-envelope"></i><span>Email</span></label>
            </div>
            
            <div className={classes.formItem}>
                <input 
                    type="number" 
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label><i className="fas fa-mobile-alt"></i><span>Phone Number</span></label>
            </div>
            <button type="submit" onClick={() => props.onProgress({
                image,
                name,
                dob,
                gender,
                email,
                phone
            })}><i className='fas fa-check'></i></button>
        </form>
    )
}

export default Personal;