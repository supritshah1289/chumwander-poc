import { useState } from "react";

export function SignUp() {

    let [user, setUser] = useState({ fname: '', email: '', msg: '' });


    function formchanged(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    function register() {
        setUser({ ...user, msg: 'Thank You!!' })
    }
    return (
        <div>
            <h3>SignUp</h3>
            <div>
                <h4>{user.fname},{user.email}</h4>
            </div>
            <div>
                <label>Full Name</label>
                <input name='fname' onChange={formchanged}></input>
            </div>
            <div>
                <label>Email</label>
                <input name='email' onChange={formchanged}></input>
            </div>
            <div>
                <h4>{user.msg}</h4>
            </div>
            <div>
                <button onClick={register}>Signup</button>
            </div>
        </div>
    )
}