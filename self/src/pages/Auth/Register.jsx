import React, { useState } from 'react'
import './Register.css'

function Register() {
    const [isLogin, setLogin] = useState(false)
    const [auth, setAuth] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='form'>
            <h1> {isLogin ? "Sinup" : "Login"} </h1>
            <form onSubmit={handleSubmit}>
                {
                    isLogin && (
                        <div className='form_div'>
                            <input
                                name='name'
                                onChange={handleChange}
                                value={auth.name}
                                type="text"
                                placeholder='Enter name' />
                        </div>
                    )}
                <>
                    <div className='form_div'>
                        <input
                            name='email'
                            onChange={handleChange}
                            value={auth.email}
                            type="email"
                            placeholder='Enter email' />
                    </div>
                    <div className='form_div'>
                        <input
                            name='password'
                            onChange={handleChange}
                            value={auth.password}
                            type="password"
                            placeholder='Enter Password' />
                    </div>
                </>
                <div >
                    <input type="submit" value={isLogin?"Register":"Login"} className='sub' />
                </div>
                <div>
                    <h5 onClick={() => {
                        setLogin((prev) => !prev)
                    }}> {isLogin ? "i have an account":"Create new account"} </h5>
                </div>
            </form>
        </div>
    )
}

export default Register