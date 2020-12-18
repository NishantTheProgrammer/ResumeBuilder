const Personal = (classes) => (
    <form className={classes.form}>
        <div className={classes.formItem}>
            <label>Name</label>
            <input type="text"></input>
        </div>
        <div className={classes.formItem}>
            <label>Date of Birth</label>
            <input type="date"></input>
        </div>
        <div className={classes.formItem}>
            <label>Gender</label>
            <div>

                <input type="radio" name='gender' value="Male"></input>
                <input type="radio" name='gender' value="Female"></input>
            </div>
        </div>
        
        <div className={classes.formItem}>
            <label>Email</label>
            <input type="Email"></input>
        </div>
        
        <div className={classes.formItem}>
            <label>Mobile</label>
            <input type="number"></input>
        </div>
    </form>
);

export default Personal;